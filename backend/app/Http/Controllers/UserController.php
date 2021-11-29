<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {

        $ROLE = [
            "SUPER_ADMIN" => 0,
            "ADMIN" => 1,
            "STUDENT" => 2,
        ];

        return $request->user()->tokenCan('adminAccess') ?
            User::whereNotIn('Role', [$ROLE['STUDENT']])->get() :
            User::whereNotIn('Role', [$ROLE['SUPER_ADMIN'], $ROLE['ADMIN']])
            ->whereNotIn('id', [$request->user()->id])
            ->paginate(8);
    }

    public function store(Request $request)
    {
        $fields =  $request->validate([
            'fname' => 'required',
            'lname' => 'required',
            'mname' => 'required',
            'email' => 'required|string|email|unique:users,email',
        ]);

        $password = bcrypt(Str::random(10));

        return User::create([
            'fname' => $fields['lname'],
            'mname' => $fields['mname'],
            'lname' => $fields['lname'],
            'email' => $fields['email'],
            'password' => $password,
            'role' => 1
        ]);
    }

    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response([
                'message' => 'Not found',
            ], 404);
        }

        if ($this->isSuperAdmin($user)) {
            return response([
                'message' => 'Cannot view this user',
            ], 405);
        };

        return User::with('userLearnWords.questionChoice.questions')
            ->where('id', $id)->get()->first();
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response([
                'message' => 'Not found',
            ], 404);
        }

        if ($this->isSuperAdmin($user)) {
            return response([
                'message' => 'Cannot update this user',
            ], 405);
        };

        $user->update($request->all());

        return $user;
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response([
                'message' => 'Not found',
            ], 404);
        }

        if ($this->isSuperAdmin($user)) {
            return response([
                'message' => 'Cannot Delete this user',
            ], 405);
        };

        return User::destroy($id);
    }

    private function isSuperAdmin($user)
    {
        if ($user->role == 0) {
            return true;
        }
        return false;
    }
}
