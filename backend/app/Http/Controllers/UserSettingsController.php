<?php

namespace App\Http\Controllers;

use App\Http\Requests\DetailsUpdateRequest;
use App\Http\Requests\PasswordUpdateRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSettingsController extends Controller
{

    public function detailsUpdate(DetailsUpdateRequest $request)
    {
        $user = $request->user();
        return $user->update($request->all());

        $response = [
            'user' => $user,
        ];

        return response()->json($response, 201);
    }

    public function passwordUpdate(PasswordUpdateRequest $request)
    {
        $user = $request->user();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'Incorrect Password',
            ], 401);
        }

        $user->update([
            'password' => bcrypt($request->password),
        ]);

        $user->update($request->all());

        $response = [
            'user' => $user,
        ];

        return response()->json($response, 201);
    }
}
