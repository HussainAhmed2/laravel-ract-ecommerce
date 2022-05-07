<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getOrders($user_id)
    {
        $data = User::With(['orders', 'orders.products'])->where("id", $user_id)->orderBy("id", "DESC")->get();

        return json_encode($data);
    }

    public function addToWishlist(Request $request)
    {
        $product = Wishlist::where('product_id', $request->product_id)->first();
        if ($product) {
            return json_encode([
                "message" => "This Product Allready Added To Wishlist",
                "status" => 2001
            ]);
        } else {
            $wishlist = new Wishlist();
            $wishlist->product_id = $request->product_id;
            $wishlist->user_id = $request->user_id;
            $wishlist->save();

            return json_encode([
                "message" => "Product Added To Wishlist",
                "status" => 2002
            ]);
        }
    }
    public function getUserWhislist($user_id)
    {
        $data = User::with(['wishlists.product'])->where("id", $user_id)->orderBy("id", "DESC")->get();
        return json_encode($data);
    }
    public function deleteCartItem($id)
    {
        $item =  Wishlist::find($id)->delete();
        return json_encode([
            "item" => $item,
            "message" => "This Item Deleted From Wishlist",
            "status" => 2002
        ]);
    }
}
