<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
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

    public function messages()
    {

        return [
            'fname.required' => 'First name is required',
            'lname.required' => 'Last name is required',
            'mname.required' => 'Middle name is required',
        ];
    }
}
