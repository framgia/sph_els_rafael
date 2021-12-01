<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\UserAnswersController;
use App\Http\Controllers\UserLearnWordController;
use App\Http\Controllers\UserFollowersController;
use App\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::get('/checkAuth', [AuthController::class, 'checkAuth']);
  Route::get('/quizzes', [QuizController::class, 'index']);
  Route::get('/quizzes/{id}', [QuizController::class, 'show']);
  Route::get('/quiz/{id}/questions', [QuestionController::class, 'show']);
  Route::apiResource('useranswers', UserAnswersController::class)->only([
    'store', 'show'
  ]);

  Route::get('/follow', [UserFollowersController::class, 'index']);
  Route::post('/follow/{id}', [UserFollowersController::class, 'store']);
  Route::delete('/unfollow/{id}', [UserFollowersController::class, 'destroy']);


  Route::apiResource('userlearnwords', UserLearnWordController::class)->only([
    'store', 'index'
  ]);

  Route::get('/users', [UserController::class, 'index']);
  Route::get('/users/{id}', [UserController::class, 'show']);

  Route::apiResource('activities', ActivityController::class)->only([
    'index', 'show'
  ]);

  Route::group(['middleware' => ['isAdmin']], function () {
    Route::apiResource('quizzes', QuizController::class)->only([
      'store', 'update', 'destroy',
    ]);
    Route::get('/questions', [QuestionController::class, 'index']);
    Route::post('/quiz/{id}/question', [QuestionController::class, 'store']);
    Route::put('/question/{id}', [QuestionController::class, 'update']);
    Route::delete('/question/{id}', [QuestionController::class, 'destroy']);
    Route::apiResource('users', UserController::class)->only([
      'store', 'update', 'destroy'
    ]);
  });
});
