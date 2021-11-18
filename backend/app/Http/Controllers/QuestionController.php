<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\QuestionChoice;
use Symfony\Component\Console\Question\ChoiceQuestion;

class QuestionController extends Controller
{
    public function index()
    {
        return Question::with('questionChoices')->get();
    }

    public function show($id)
    {
        return Question::with('questionChoices')->where('quiz_id', $id)->get();
    }

    public function store(QuestionRequest $request, $id)
    {

        $question = Question::create([
            'word' => $request->word,
            'quiz_id' => $id,
        ]);

        $choices = array();

        foreach ($request->choices as $value) {
            $data = array(
                'question_id' => $question->id,
                'choice' => $value['choice'],
                'isCorrect' => $value['isCorrect'],
            );
            array_push($choices, QuestionChoice::create($data));
        }

        $response = [
            'question' => $question,
            'choices' => $choices,
        ];

        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {
        $question = Question::find($id);

        if (!$question)
            return response([
                'message' => 'Not found',
            ], 404);

        $question->update(['word' => $request->word]);

        $choices = array();

        foreach ($request->choices as $value) {
            $choice =  QuestionChoice::find($value['id']);
            $choice->update([
                'choice' => $value['choice'],
                'isCorrect' => $value['isCorrect']
            ]);
            array_push($choices, $choice);
        }

        $response = [
            'question' => $question,
            'choices' => $choices,
        ];

        return response()->json($response, 201);
    }

    public function destroy($id)
    {
        $question = Question::find($id);

        if (!$question)
            return response([
                'message' => 'Not found',
            ], 404);

        return Question::destroy($id);
    }
}
