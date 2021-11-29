<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserAnswer;
use App\Http\Requests\UserAnswerRequest;


class UserAnswersController extends Controller
{

    public function index()
    {
    }

    public function store(UserAnswerRequest $request)
    {
        $userid =  $request->user()->id;
        $answers = array();

        foreach ($request->user_answers as $value) {
            $data = array(
                'question_id' => $value['question_id'],
                'question_choice_id' => $value['question_choice_id'],
                'user_id' => $userid,
            );
            array_push($answers, UserAnswer::create($data));
        }

        $response = [
            'useranswers' => $answers,
        ];

        return response()->json($response, 201);
    }

    public function show(Request $request, $id)
    {
        $userid =  $request->user()->id;
        return UserAnswer::where("question_id", function ($query) use ($id) {
            $query->select('question_id')
                ->from('questions')
                ->where('questions.quiz_id', $id)
                ->limit(1);
        })
            ->with('question', 'questionChoice')
            ->where(['user_id' => $userid])
            ->get();
    }
}
