<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'profile_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($image = $request->file('profile_image')) {
            $destinationPath = 'image/';
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $image->move($destinationPath, $profileImage);
            $input['photo'] = "$profileImage";

            $user = User::find($request->user()->id);

            $user->update($input);
        }
    }
}
