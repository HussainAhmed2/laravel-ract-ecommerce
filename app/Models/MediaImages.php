<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaImages extends Model
{
    protected $table = 'media_images';
    use HasFactory;

    public function product_images()
    {
        return $this->belongsTo(product_images::class,'image_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,"user_id","id");
    }

}
