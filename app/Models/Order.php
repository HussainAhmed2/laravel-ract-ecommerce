<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;


    public function orderProducts()
    {
        return $this->hasMany(
            Order_Product::class
        );
    }
    public function products()
    {
        return $this->belongsToMany(
            Product::class
        )->withPivot('quantity', 'amount');
    }
    public function user()
    {
        return $this->belongsTo(
            User::class
        );
    }
}
