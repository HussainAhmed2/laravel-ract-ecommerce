<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Rating extends Model
{
    use HasFactory;

    public function Product()
    {
        return $this->belongsTo(Product_Rating::class, Product::class);
    }
}
