<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use App\Models\Quiz;
use App\Models\UserActivity;
use App\Models\UserLearnWord;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Http\Request;

class ActivityController extends Controller
{

    public function index(Request $request)
    {
        $id = $request->user()->id;

        $activities = UserActivity::where('user_id', $id)
            ->orWhereIn("user_id", function ($query) use ($id) {
                $query->select('following')
                    ->from('followers')
                    ->where('followers', $id);
            })
            ->with(['activitable' => function (MorphTo $morphTo) {
                $morphTo->morphWith([
                    Quiz::class => [
                        'questions:id,quiz_id,word',
                        'questions.userAnswers:question_choice_id,question_id',
                        'questions.userAnswers.questionChoice:isCorrect,id'
                    ],
                    Follower::class => [
                        'userFollower'
                    ]
                ]);
            }])->get();

        return $activities;
    }

    public function show($id)
    {
        $activities = UserActivity::where('user_id', $id)
            ->with(['activitable' => function (MorphTo $morphTo) {
                $morphTo->morphWith([
                    Quiz::class => [
                        'questions:id,quiz_id,word',
                        'questions.userAnswers:question_choice_id,question_id',
                        'questions.userAnswers.questionChoice:isCorrect,id'
                    ],
                    Follower::class => [
                        'userFollower'
                    ]
                ]);
            }])->get();

        return $activities;
    }
}
