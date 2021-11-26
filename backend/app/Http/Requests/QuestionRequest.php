<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class QuestionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'word' => 'required|min:5',
            'question_choices' => 'required|array|min:4|max:4',
            'question_choices.*.choice' => 'required|string',
            'question_choices.*.isCorrect' => 'required|boolean'
        ];
    }
}
