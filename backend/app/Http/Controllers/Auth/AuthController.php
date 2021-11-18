<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'Bad creds',
            ], 401);
        }
        $token = $user->role == 0 || 1 ?
            $user->createToken('admin', ['adminAccess'])->plainTextToken :
            $token = $user->createToken('myapptoken', ['studentAccess'])->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response, 201);
    }

    public function register(RegisterRequest $request)
    {

        $user = User::create([
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 2
        ]);

        $token = $user->createToken('myapptoken', ['studentAccess'])->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response, 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json('Logged out', 200);
    }

    public function checkAuth(Request $request)
    {
        return $request->user();
    }
}
