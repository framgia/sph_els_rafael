<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use App\Http\Requests\UserAnswerRequest;
use Illuminate\Support\Facades\Auth;

class UserAnswersController extends Controller
{

    public function index()
    {
    }

    public function store(UserAnswerRequest $request)
    {
        $userid =  Auth::user()->id;
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

    public function show($id)
    {
        $userid =  Auth::user()->id;
        return UserAnswer::with('question', 'questionChoice')
            ->where(['user_id' => $userid])
            ->whereIn("question_id", function ($query) use ($id) {
                $query->select('id')
                    ->from('questions')
                    ->where('quiz_id', $id);
            })
            ->get();
    }
}
