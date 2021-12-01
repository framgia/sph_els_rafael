<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DetailsUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'fname' => 'required',
            'lname' => 'required',
            'mname' => 'required',
            'email' => 'required|string|email|unique:users,email',
        ];
    }
}
