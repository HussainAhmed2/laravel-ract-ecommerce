<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_images extends Model
{
    use HasFactory;
    public function Product()
    {
        return $this->belongsTo(product_images::class, Product::class);
    }
}
