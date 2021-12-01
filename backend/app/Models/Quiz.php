<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $table = 'quizzes';

    protected $fillable = [
        'title',
        'description'
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function questionChoices()
    {
        return $this->hasManyThrough(
            QuestionChoice::class,
            Question::class,
        );
    }

    public function activities()
    {
        return $this->morphOne(UserActivity::class, 'activitable');
    }
}
