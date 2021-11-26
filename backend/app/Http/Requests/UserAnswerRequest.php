<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserAnswerRequest extends FormRequest
{
    public function rules()
    {
        return [
            'user_answers' => 'required|array',
            'user_answers.*.question_id' => 'required',
            'user_answers.*.question_choice_id' => 'required'
        ];
    }
}
