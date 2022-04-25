<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 200; $i++) {
            DB::table('products')->insert([
                'product_image' => 'product' . '-' . random_int(1, 10) . '.jpg',
                'product_name' => Str::random(10),
                'product_price' => random_int(100, 500),
                'product_qty' => random_int(5, 10),
                'category_id' => random_int(1, 20),
                'brand_id' => random_int(1, 20),
                'description' => Str::random(200),
            ]);
        }
    }
}
