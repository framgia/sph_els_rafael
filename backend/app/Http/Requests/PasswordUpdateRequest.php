<?php

namespace App\Http\Requests;

use App\Rules\MatchOldPassword;
use Illuminate\Foundation\Http\FormRequest;

class PasswordUpdateRequest extends FormRequest
{

    public function rules()
    {
        return [
            'current_password' => ['required', new MatchOldPassword],
            'password' => 'required|string|confirmed|min:8'
        ];
    }
}
