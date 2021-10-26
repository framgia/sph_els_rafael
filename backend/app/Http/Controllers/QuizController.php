<?php

namespace App\Http\Controllers;

use App\Models\Quizzes;
use Illuminate\Http\Request;

class QuizController extends Controller
{

    //
    public function index()
    {
        return Quizzes::all();
    }
}
