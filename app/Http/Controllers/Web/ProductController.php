<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $data = Product::With(['category', 'brand', "ProductRating.product", "PriductImages.product"])

            ->Join('product__ratings', 'product__ratings.product_id', 'products.id')


            ->select(
                "products.id",
                "products.product_image",
                "products.product_name",
                "products.product_price",
                "products.category_id",
                "products.brand_id",
                DB::raw('AVG(product__ratings.rating) as AverageRating')
            )

            ->groupBy('products.id')
            ->groupBy('products.product_image')
            ->groupBy('products.product_name')
            ->groupBy('products.product_price')
            ->groupBy('products.category_id')
            ->groupBy('products.brand_id')
            ->where("products.id", $id)->get();
        return json_encode($data);
    }
}
