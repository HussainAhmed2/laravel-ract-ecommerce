<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductRatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 500; $i++) {
            DB::table('product__ratings')->insert([
                'name' => Str::random(10),
                'email' => Str::random(10) . "@gmail.com",
                'review' => Str::random(100),
                'rating' => random_int(1, 5),
                'product_id' => random_int(1, 200),
            ]);
        }
    }
}
