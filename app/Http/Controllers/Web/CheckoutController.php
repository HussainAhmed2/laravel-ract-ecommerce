<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CheckoutController extends Controller
{
    public function createOrder(Request $request)
    {


        $rules = [
            "address" => "required",
            "country" => "required",
            "city" => "required",
            "state" => "required",
        ];
        $messages = [
            "address.required" => "Address is required",
            "country.required" => "Country is required",
            "state.required" => "State  is required",
            "city.required" => "City is required",

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

            $order = new Order();
            $order->order_no = $request->order_no;
            $order->user_id = $request->user_id;
            $order->order_amount = $request->order_amount;
            $order->address = $request->address;
            $order->country = $request->country;
            $order->city = $request->city;
            $order->state = $request->state;
            $order->zip = $request->zip;
            $order->payment_method = $request->payment_method;
            $order->source = "web";
            $order->shipment_cost = 50;
            $order->save();
            $Productcounts = count($request->product_id);
            $Productarray = array();
            for ($i = 0; $i < $Productcounts; $i++) {
                $Productarray[]    =  array("order_no" => $request->order_no, "product_id" => $request->product_id[$i], "quantity" => $request->quantity[$i], "amount" => $request->amount[$i]);
            }

            DB::table('order_products')->insert($Productarray);

            return json_encode([
                'message' => ['Order Create Successfully']
            ], 200);
        }
    }
}
