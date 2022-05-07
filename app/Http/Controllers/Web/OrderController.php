<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function getOrder($id)
    {
        $data = Order::With('products')->where('order_no', $id)->get();

        return json_encode($data);
    }
}
