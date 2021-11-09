<?php


use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('quizzes', QuizController::class);
Route::resource('users', UserController::class);

//Needed this for later when using auth

// Route::get('/quizzes', [QuizController::class, 'index']);
// Route::post('/quizzes', [QuizController::class, 'store']);
// Route::put('/quizzes/{id}', [QuizController::class, 'update']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
