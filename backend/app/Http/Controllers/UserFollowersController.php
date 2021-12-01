<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\User;
use Illuminate\Http\Request;

class UserFollowersController extends Controller
{
    public function index(Request $request)
    {
        return User::with('followings', 'followers')
            ->where('id', $request->user()->id)->first();
    }

    public function store(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user)
            return response(['message' => 'Not found'], 404);

        $request->user()->followings()->attach($id);

        return $user;
    }

    public function destroy(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user)
            return response(['message' => 'Not found'], 404);

        $request->user()->followings()->detach($id);

        return $user;
    }
}
