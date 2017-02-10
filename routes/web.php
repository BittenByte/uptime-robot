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

Route::get('/', function () {
    return redirect()->route('admin.dashboard');
});

Auth::routes();

Route::group(['middleware' => 'auth', 'namespace' => 'Admin', 'prefix' => 'admin/', 'as' => 'admin.'], function () {
    Route::get('/dashboard', [
        'uses' => 'MonitorController@index',
    ])->name('dashboard');
});
