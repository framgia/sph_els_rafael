<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionChoice extends Model
{
    use HasFactory;

    protected $table = 'question_choices';

    protected $fillable = ['choice', 'isCorrect', 'question_id'];

    public function questions()
    {
        return $this->belongsTo(Question::class);
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'question_choice_id');
    }

    public function userLearnWords()
    {
        return $this->hasMany(UserLearnWord::class, 'question_choice_id');
    }
}
