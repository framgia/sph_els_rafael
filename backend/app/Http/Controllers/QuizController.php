<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{

    public function index(Request $request)
    {

        return $request->user()->tokenCan('adminAccess') ?
            Quiz::all() : Quiz::paginate(8);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        return Quiz::create($request->all());
    }

    public function show($id)
    {
        return Quiz::where('id', $id)->get()->first();
    }

    public function update(Request $request, $id)
    {
        $quiz = Quiz::find($id);
        $quiz->update($request->all());

        return $quiz;
    }

    public function destroy($id)
    {
        return Quiz::destroy($id);
    }
}
