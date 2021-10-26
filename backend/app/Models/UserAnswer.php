<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    use HasFactory;
    protected $table = 'user_answers';

    protected $fillable = ['question_id', 'choice_id', 'u_id'];

    public function question()
    {
        return $this->belongsToMany(Question::class);
    }

    public function user()
    {
        return $this->belongsToMany(User::class);
    }

    public function questionChoice()
    {
        return $this->belongsToMany(QuestionChoice::class);
    }
}
