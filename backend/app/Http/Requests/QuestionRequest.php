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
            'choices' => 'required|array|min:4|max:4',
            'choices.*.choice' => 'required|string',
            'choices.*.isCorrect' => 'required|boolean'
        ];
    }
}
