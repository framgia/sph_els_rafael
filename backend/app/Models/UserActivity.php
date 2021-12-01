<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserActivity extends Model
{
    use HasFactory;
    protected $table = 'user_activities';

    protected $fillable = ['activitable_id', 'activitable_type', 'user_id'];

    public function activitable()
    {
        return $this->morphTo();
    }

    public function userLearnWord()
    {
        return $this->belongsTo(UserLearnWord::class);
    }

    public function following()
    {
        return $this->belongsTo(User::class);
    }
}
