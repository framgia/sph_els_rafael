<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DetailsUpdateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'fname' => 'required|min:5',
            'lname' => 'required|min:5',
            'mname' => 'required|min:5',
            'email' => 'required|string|email|max:255|unique:users,email,' . $this->user()->id,
        ];
    }
}
