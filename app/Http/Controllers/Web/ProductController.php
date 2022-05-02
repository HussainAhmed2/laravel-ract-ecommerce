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

        // $data = Product::With(["Category", "Brand", "ProductRating.product", "PriductImages.product"])
        //     ->orderBy('id', 'DESC')
        //     ->paginate(12);

        // foreach ($data as $product) {
        //     $data['product.ratings'] = $product->ProductRating()->avg('rating');
        // }

        $data = Product::With(["Category", "Brand", "ProductRating.product", "PriductImages.product"])
            ->select(
                "products.id",

                DB::raw('AVG(product__ratings.rating) as AverageRating')
            )
            ->Join('product__ratings', 'product__ratings.product_id', 'products.id')
            ->groupBy('products.id')
            ->orderBy('id', 'DESC')
            ->paginate(12);

        // $data = Product::With(["Category", "Brand", "PriductRating.product", "PriductImages.product"])
        //     ->select(DB::raw('AVG(product__ratings.rating) as AverageRating'))
        //     ->groupBy('products.id')->get();

        // $data = Product::With(["PriductRating.product"])
        //     ->join('product__ratings', 'products.id', '=', 'product__ratings.product_id')

        //     ->select('products.*', DB::raw('avg(product__ratings.rating) as AvarageRate'))
        //     ->groupBy('product__ratings.product_id')->get();
        return json_encode($data);
    }
}
