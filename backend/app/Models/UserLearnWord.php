<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLearnWord extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsToMany(User::class, "u_id");
    }

    public function questionChoice()
    {
        return $this->belongsToMany(QuestionChoice::class, "choice_id");
    }
}
