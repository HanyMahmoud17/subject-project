<?php

use App\Http\Controllers\Api\UniversityController;
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


Route::get('universities', [UniversityController::class, 'index']);
Route::get('stages', [UniversityController::class, 'getStage']);
Route::get('faculties', [UniversityController::class, 'getCollague']);
Route::get('specialties', [UniversityController::class, 'getSpecializes']);
Route::get('levels', [UniversityController::class, 'getLevels']);
Route::get('subjects', [UniversityController::class, 'getSubjects']);
Route::get('subjects/{id}',[UniversityController::class, 'getSubjectById']);
Route::post('counts', [UniversityController::class, 'addCount']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
