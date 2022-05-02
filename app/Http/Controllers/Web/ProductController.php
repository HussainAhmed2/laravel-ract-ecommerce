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
}
