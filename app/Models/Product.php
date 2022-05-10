<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function brand()
    {
        return $this->hasOne(Brand::class, 'id', 'brand_id');
    }
    public function ProductRating()
    {
        return $this->hasMany(Product_Rating::class, 'product_id', 'id');
    }
    public function PriductImages()
    {
        return $this->hasMany(product_images::class, 'product_id', 'id');
    }
    public function orders()
    {
        return $this->belongsToMany(
            Order::class,
        );
    }
    public function wishlists()
    {
        return $this->belongsToMany(
            Wishlist::class,
            "wishlists",

        );
    }
}
