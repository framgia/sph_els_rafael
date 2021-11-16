<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::group(['middleware' => ['isAdmin']], function () {
    Route::resource('quizzes', QuizController::class);
    Route::resource('users', UserController::class);
  });
});
