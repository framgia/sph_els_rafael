<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::whereNotIn('Role', [0])->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
