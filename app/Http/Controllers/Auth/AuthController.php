<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    function ApiLogin(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        // print_r($data);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response([
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }

    function registerUser(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        // print_r($data);
        if ($user) {
            return response([
                'message' => ['Email Already Register']
            ], 404);
        } else {
            $insertUser = new User();
            $insertUser->name = $request->name;
            $insertUser->email = $request->email;
            $insertUser->password = Hash::make($request->password);
            $insertUser->save();
            return response([
                'message' => ['User Register Successfully']
            ], 200);
        }
    }
}
