<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function Category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function Brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id', 'id');
    }
    public function ProductRating()
    {
        return $this->hasMany(Product_Rating::class, 'product_id', 'id');
    }
    public function PriductImages()
    {
        return $this->hasMany(product_images::class, 'product_id', 'id');
    }
}
