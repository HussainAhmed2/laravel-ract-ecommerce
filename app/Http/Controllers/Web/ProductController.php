<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts()
    {
        $data = Product::With(["Category", "Brand", "PriductRating.product", "PriductImages.product"])->where("deleted_at", null)->orderBy('id', 'DESC')->get();
        return json_encode($data);
    }
}
