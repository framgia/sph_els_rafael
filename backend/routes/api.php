<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::post('/logout', [AuthController::class, 'logout']);

  Route::group(['middleware' => ['isAdmin']], function () {
    Route::resource('quizzes', QuizController::class);
    Route::resource('users', UserController::class);
    Route::get('/questions', [QuestionController::class, 'index']);
    Route::get('/quiz/{id}/questions', [QuestionController::class, 'show']);
    Route::post('/quiz/{id}/question', [QuestionController::class, 'store']);
    Route::put('/question/{id}', [QuestionController::class, 'update']);
    Route::delete('/question/{id}', [QuestionController::class, 'destroy']);
  });
});
