<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Rating extends Model
{

    use HasFactory;

    protected $table = 'product__ratings';

    public function Product()
    {
        return $this->belongsTo('App\Models\Product_Rating', 'product_id');
    }
}
