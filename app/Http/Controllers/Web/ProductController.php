<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Product_Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function getProducts()
    {
        $data = Product::With(["ProductRating.product"])

            ->Join('product__ratings', 'product__ratings.product_id', 'products.id')

            ->select(
                "products.id",
                "products.product_image",
                "products.product_name",
                "products.product_price",

                DB::raw('AVG(product__ratings.rating) as AverageRating')
            )
            ->groupBy('products.id')
            ->groupBy('products.product_image')
            ->groupBy('products.product_name')
            ->groupBy('products.product_price')

            ->orderBy('products.id', 'DESC')
            ->paginate(12);
        return json_encode($data);
    }

    public function getSingleProduct($id)
    {
        $data = Product::With(['category', 'brand', "ProductRating", "ProductImages.media_image"])

            ->Join('product__ratings', 'product__ratings.product_id', 'products.id')


            ->select(
                "products.id",
                "products.product_image",
                "products.product_name",
                "products.product_price",
                "products.category_id",
                "products.brand_id",
                "products.description",
                DB::raw('AVG(product__ratings.rating) as AverageRating')
            )

            ->groupBy('products.id')
            ->groupBy('products.product_image')
            ->groupBy('products.product_name')
            ->groupBy('products.product_price')
            ->groupBy('products.category_id')
            ->groupBy('products.brand_id')
            ->groupBy('products.description')
            ->where("products.id", $id)->get();
        return json_encode($data);
    }

    public function product_rating(Request $request){

        $rules = [
            "name" => "required",
            "email" => "required",
            "review" => "required",
            "rating" => "required",
        ];
        $messages = [
            "name.required" => "name is required",
            "email.required" => "email is required",
            "review.required" => "review  is required",
            "rating.required" => "rating is required",

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
        $rating = new Product_Rating();
        $rating->name = $request->name;
        $rating->email = $request->email;
        $rating->review = $request->review;
        $rating->rating = $request->rating;
        $rating->product_id = $request->product_id;

        $rating->save();

        return json_encode([
            "message" => "Product Rating Submited"
        ]);

        }
    }


    public function searchProducts($name)
    {
        $data = Product::where('product_name', 'LIKE', "%{$name}%")
            ->get();

        return json_encode($data);
    }
}
