<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordUpdateRequest extends FormRequest
{

    public function rules()
    {
        return [
            'fname' => 'required',
            'lname' => 'required',
            'mname' => 'required',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|confirmed|min:8'
        ];
    }
}
