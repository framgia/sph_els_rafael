<?php

namespace App\Http\Controllers;

use App\Http\Requests\LearnWordRequest;
use App\Models\UserLearnWord;
use Illuminate\Support\Facades\Auth;

class UserLearnWordController extends Controller
{
    public function index()
    {
        $userid = Auth::user()->id;
        return UserLearnWord::with('questionChoice')
            ->where(['user_id' => $userid])
            ->get();
    }

    public function store(LearnWordRequest $request)
    {
        $userid = Auth::user()->id;
        $learnwords = array();

        foreach ($request->user_learn_words as $value) {
            $data = array(
                'question_choice_id' => $value['question_choice_id'],
                'user_id' => $userid,
            );
            array_push($learnwords, UserLearnWord::create($data));
        }

        $response = [
            'useranswers' => $learnwords,
        ];

        return response()->json($response, 201);
    }
}
