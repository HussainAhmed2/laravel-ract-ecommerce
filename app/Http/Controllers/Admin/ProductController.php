<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MediaImages;
use App\Models\Product;
use App\Models\ProductRating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index(){

        $data = Product::all();

        return json_encode($data);
    }
    public function storeProduct (Request $request) {
        $imageName = null;

        if($request->file('product_image')){
        $imageName = time().'.'.$request->product_image->extension();
        $request->product_image->move(public_path('uploads/images'), $imageName);
        }

        $product = new Product();
        $product->product_image         =       $imageName;
        $product->product_name          =       $request->product_name;
        $product->product_price         =       $request->product_price;
        $product->product_qty           =       $request->product_qty;
        $product->category_id           =       $request->category_id;
        $product->brand_id              =       $request->brand_id;
        $product->description           =       $request->description;
        $product->save();

        $Product_Images_array           =        array();

        if($request->product_images)
        {
            foreach($request->product_images as $key => $data) {
                $Product_Images_array[]  =  array("product_id" => $product->id,  "image_id" => $request->product_images[$key]);
            }
        }

        DB::table('product_images')->insert($Product_Images_array);

        return json_encode([
            'message' => ['Product Added Successfully'],
            "order" => $product
        ], 200);

    }


}
