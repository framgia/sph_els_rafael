<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLearnWord extends Model
{
    use HasFactory;

    protected $table = 'user_learn_words';

    protected $fillable = ['user_id', 'question_choice_id'];

    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function questionChoice()
    {
        return $this->belongsTo(QuestionChoice::class, "question_choice_id");
    }
}
