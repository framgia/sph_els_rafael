<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    use HasFactory;
    protected $table = 'followers';

    protected $fillable = ['followers,following'];

    public function userFollower()
    {
        return $this->belongsTo(User::class, 'followers');
    }

    public function activities()
    {
        return $this->morphOne(UserActivity::class, 'activitable');
    }
}
