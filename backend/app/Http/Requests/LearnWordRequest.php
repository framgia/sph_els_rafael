<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LearnWordRequest extends FormRequest
{
    public function rules()
    {
        return [
            'user_learn_words' => 'required|array',
            'user_learn_words.*.question_choice_id' => 'required|int'
        ];
    }
}
