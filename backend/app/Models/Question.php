<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $table = 'questions';

    protected $fillable = ['word', 'quiz_id'];

    public function quizzes()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }

    public function userAnswers()
    {
        return $this->hasMany(UserAnswer::class, 'question_id');
    }

    public function questionChoices()
    {
        return $this->hasMany(QuestionChoice::class, 'question_id');
    }
}
