<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionChoices extends Model
{
    use HasFactory;

    protected $table = 'question_choices_table';

    protected $fillable = ['choice', 'isCorrect', 'question_id'];

    public function questions()
    {
        return $this->belongsTo(Question::class, 'question_id');
    }
}