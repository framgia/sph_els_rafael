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
            ->with(['user', 'activitable' => function (MorphTo $morphTo) use ($id) {
                $morphTo->morphWith([
                    Quiz::class => [
                        'questionChoices' => function ($query) use ($id) {
                            $query->join(
                                'user_learn_words',
                                'question_choices.id',
                                '=',
                                'user_learn_words.question_choice_id'
                            )
                                ->where('user_learn_words.user_id', $id)
                                ->get();
                        }, 'questions'
                    ],
                    Follower::class => [
                        'userFollower'
                    ]
                ]);
            }])->orderBy('created_at', 'desc')->get();

        $response = [
            'activities' => $activities,
        ];

        return response()->json($response, 201);
    }

    public function show($id)
    {
        $activities = UserActivity::with(['user', 'activitable' =>
        function (MorphTo $morphTo) use ($id) {
            $morphTo->morphWith([
                Quiz::class => [
                    'questionChoices' => function ($query) use ($id) {
                        $query->join(
                            'user_learn_words',
                            'question_choices.id',
                            '=',
                            'user_learn_words.question_choice_id'
                        )
                            ->where('user_learn_words.user_id', $id)
                            ->get();
                    },
                    'questions'
                ],
                Follower::class => [
                    'userFollower'
                ]
            ]);
        }])->where('user_id', $id)->orderBy('created_at', 'desc')->get();

        $response = [
            'activities' => $activities,
        ];

        return response()->json($response, 201);
    }
}
