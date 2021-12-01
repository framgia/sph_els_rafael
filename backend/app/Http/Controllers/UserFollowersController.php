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

        $followUser = Follower::where([
            'followers' => $user->id,
            'following' => $request->user()->id
        ])->first();

        $followUser->activities()->create([
            'user_id' =>   $request->user()->id,
        ]);

        return $followUser;
    }

    public function destroy(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user)
            return response(['message' => 'Not found'], 404);

        $followUser = Follower::where([
            'followers' => $user->id,
            'following' => $request->user()->id
        ])->first();

        $followUser->activities()->first()->delete();

        $request->user()->followings()->detach($id);

        return $user;
    }
}
