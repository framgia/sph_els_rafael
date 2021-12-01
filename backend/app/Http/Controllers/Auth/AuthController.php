<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Quiz;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => 'Bad creds',
            ], 401);
        }


        $quiz = Quiz::whereIn('id', function ($query) use ($user) {
            $query->select('quiz_id')->distinct('quiz_id')
                ->from('questions')
                ->join(
                    'question_choices',
                    'questions.id',
                    '=',
                    'question_choices.question_id'
                )->join(
                    'user_learn_words',
                    'question_choices.id',
                    '=',
                    'user_learn_words.question_choice_id'
                )->where('user_learn_words.user_id', $user->id);
        })->get();


        $token = $user->role == 0 || $user->role == 1 ?
            $user->createToken('admin', ['adminAccess'])->plainTextToken :
            $token = $user->createToken('myapptoken', ['studentAccess'])->plainTextToken;

        $response = [
            'user' => $user,
            'learnWords' => $user->role == 2 ?
                $user->userLearnWords()->get() : "",
            'token' => $token,
            'quiz' => $quiz
        ];

        return response()->json($response, 201);
    }

    public function register(RegisterRequest $request)
    {

        $user = User::create([
            'fname' => $request->fname,
            'mname' => $request->mname,
            'lname' => $request->lname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 2
        ]);

        $token = $user->createToken('myapptoken', ['studentAccess'])->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response()->json($response, 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json('Logged out', 200);
    }

    public function checkAuth(Request $request)
    {
        $user = User::find($request->user()->id);;

        $UserWithTotal =  User::withCount(['userLearnWords'])
            ->where('id', $request->user()->id)
            ->first();

        $quiz = Quiz::whereIn('id', function ($query) use ($user) {
            $query->select('quiz_id')->distinct('quiz_id')
                ->from('questions')
                ->join(
                    'question_choices',
                    'questions.id',
                    '=',
                    'question_choices.question_id'
                )->join(
                    'user_learn_words',
                    'question_choices.id',
                    '=',
                    'user_learn_words.question_choice_id'
                )->where('user_learn_words.user_id', $user->id);
        })->get();


        $response = [
            'user' => $UserWithTotal,
            'learnWords' => $user->userLearnWords()->get(),
            'quiz' => $quiz,
        ];

        return response()->json($response, 201);
    }
}
