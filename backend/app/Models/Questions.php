<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;
    protected $table = 'questions';

    protected $fillable = ['word', 'quiz_id'];

    public function quizzes()
    {
        return $this->belongsToMany(Quizzes::class);
    }

    public function questionChoices()
    {
        return $this->hasMany(QuestionChoices::class, 'question_choices');
    }
}
