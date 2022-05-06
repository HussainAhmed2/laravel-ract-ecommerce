<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getOrders($user_id)
    {
        $data = User::With(['orders', 'orders.products'])->where("id", $user_id)->orderBy("id", "DESC")->get();

        return json_encode($data);
    }
}
