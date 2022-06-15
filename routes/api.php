<?php

use App\Http\Controllers\Admin\MediaImagesController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Web\CheckoutController as WebCheckoutController;
use App\Http\Controllers\Web\OrderController;
use App\Http\Controllers\Web\ProductController as WebProductController;
use App\Http\Controllers\Web\UserController;
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
    Route::get('getOrder/{id}', [OrderController::class, 'getOrder']);
    Route::post('user/addToWishlist', [UserController::class, 'addToWishlist']);
    Route::get('user/getOrders/{user_id}', [UserController::class, 'getOrders']);
    Route::get('user/getUserWhislist/{user_id}', [UserController::class, 'getUserWhislist']);
    Route::get('user/deleteCartItem/{id}', [UserController::class, 'deleteCartItem']);


    //Admin
    Route::post('admin/storeProduct', [ProductController::class, 'storeProduct']);
    Route::get('admin/getMediaImages/{user_id}', [MediaImagesController::class, 'getMediaImages']);
    Route::post('admin/storeMediaImages', [MediaImagesController::class, 'uploadMediaImages']);

});

Route::post('auth/login', [AuthController::class, 'ApiLogin']);
Route::post('auth/registerUser', [AuthController::class, 'registerUser']);
Route::get('getProducts', [WebProductController::class, 'getProducts']);
Route::get('getSingleProduct/{id}', [WebProductController::class, 'getSingleProduct']);
Route::post('productRating', [WebProductController::class, 'product_rating']);
Route::get('searchProducts/{name}', [WebProductController::class, 'searchProducts']);




