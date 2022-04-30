<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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

        $rules = [
            "first_name" => "required",
            "last_name" => "required",
            "mobile_no" => "required",
            "email" => "required",
            "password" => "required"
        ];
        $messages = [
            "first_name.required" => "First Name field is required",
            "last_name.required" => "Last Name field is required",
            "mobile_no.required" => "Mobile Number field is required",
            "email.required" => "Email field is required",
            "password.required" => "Password field is required",
        ];
        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return json_encode(
                [
                    'message' => $validator->errors(),
                    "status" => 404
                ],

            );
        } else {
            $user = User::where('email', $request->email)->first();
            // print_r($data);
            if ($user) {
                return response([
                    'message' => ['Email Already Register']
                ], 404);
            } else {
                $insertUser = new User();
                $insertUser->first_name = $request->first_name;
                $insertUser->last_name = $request->last_name;
                $insertUser->mobile_no = $request->mobile_no;
                $insertUser->email = $request->email;
                $insertUser->password = Hash::make($request->password);
                $insertUser->save();
                return response([
                    'message' => ['User Register Successfully']
                ], 200);
            }
        }
    }
}
