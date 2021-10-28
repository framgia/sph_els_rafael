<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;
    protected $table = 'user_answers_table';

    protected $fillable = ['question_id', 'choice_id', 'u_id'];

    public function question()
    {
        return $this->belongsToMany(Question::class, "question_id");
    }

    public function user()
    {
        return $this->belongsToMany(User::class, "u_id");
    }

    public function questionChoice()
    {
        return $this->belongsToMany(QuestionChoice::class, "choice_id");
    }
}
