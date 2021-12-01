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
        return $request->user()->followings()->attach($id);
    }

    public function destory(Request $request, $id)
    {
        return $request->user()->followings()->detach($id);
    }
}
