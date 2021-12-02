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
        $user->update($request->all());

        $response = [
            'user' => $user,
        ];

        return response()->json($response, 201);
    }

    public function passwordUpdate(PasswordUpdateRequest $request)
    {
        $user = $request->user();

        $user->update(['password' => Hash::make($request->password)]);

        $response = ['user' => $user];

        return response()->json($response, 201);
    }
}
