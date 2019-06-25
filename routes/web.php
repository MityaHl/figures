<?php

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


Route::get('/' , 'PageController@index');
Route::get('/figures/showSquare', 'FiguresController@showSquare');
Route::get('/figures/calcPercent', 'FiguresController@calcPercent');
Route::get('/types/getTypes', 'TypesController@getTypes');
Route::resource('/types', 'TypesController');
Route::resource('/figures', 'FiguresController');

