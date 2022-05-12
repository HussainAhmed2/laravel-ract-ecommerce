<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductRating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(){

        $data = Product::all();

        return json_decode($data);
    }
    public function storeProduct (Request $request) {
        $imageName = null;

        if($request->file('product_image')){
        $imageName = time().'.'.$request->product_image->extension();
        $request->product_image->move(public_path('uploads/images'), $imageName);
        }

        $product = new Product();
        $product->product_image         =       $request->$imageName;
        $product->product_name          =       $request->product_name;
        $product->product_price         =       $request->product_price;
        $product->product_qty           =       $request->product_qty;
        $product->category_id           =       $request->category_id;
        $product->brand_id              =       $request->brand_id;
        $product->description           =       $request->description;
        $product->save();

        $Product_Images_array           = array();
       // $User_Images_array              = array();
        $images_count                   = count($request->product_id);

        for ($i = 0; $i < $images_count; $i++) {
            $imageName = null;
            $imageName = time().'.'.$request->product_images[$i]->extension();
            $request->product_images[$i]->move(public_path('uploads/images'), $imageName);
            $Product_Images_array[]  =  array("product_id" => $product->id,  "image" => $imageName);
          //  $Product_Images_array[]  =  array("user_id" => $request->user_id,  "image" => $imageName);
        }

        DB::table('product_images')->insert($Product_Images_array);

        return json_encode([
            'message' => ['Product Added Successfully'],
            "order" => $product
        ], 200);



    }

}
