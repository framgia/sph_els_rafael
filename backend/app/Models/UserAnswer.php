<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;
    protected $table = 'user_answers_table';

    protected $fillable = ['question_id', 'question_choice_id', 'user_id'];

    public function question()
    {
        return $this->belongsTo(Question::class, "question_id");
    }

    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function questionChoice()
    {
        return $this->belongsTo(QuestionChoice::class, "question_choice_id");
    }
}
