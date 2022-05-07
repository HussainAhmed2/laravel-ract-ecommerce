<?php

use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Web\CheckoutController as WebCheckoutController;
use App\Http\Controllers\Web\OrderController;
use App\Http\Controllers\Web\ProductController as WebProductController;
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

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('product-list', [ProductController::class, 'index'])->name('product-list');
    Route::post('createOrder', [WebCheckoutController::class, 'createOrder']);
});

Route::post('auth/login', [AuthController::class, 'ApiLogin']);

Route::post('auth/registerUser', [AuthController::class, 'registerUser']);

Route::get('getProducts', [WebProductController::class, 'getProducts']);

Route::get('getOrder/{id}', [OrderController::class, 'getOrder']);
