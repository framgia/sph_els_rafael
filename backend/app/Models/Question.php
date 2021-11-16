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
        return $this->belongsTo(Quiz::class);
    }

    public function questionChoices()
    {
        return $this->hasMany(QuestionChoice::class, 'question_id');
    }
}
