<?php

use App\Http\Controllers\UniversityController;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/storage/subject-files/{$file}', function ($file) {
   return redircte('/media/subject-files/'.$file);
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    // Route::resource('universities',UniversityController::class ); 
});
