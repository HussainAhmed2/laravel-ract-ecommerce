<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 800; $i++) {
            DB::table('product_images')->insert([
                'product_id' => random_int(1, 200),
                'image_id' =>  random_int(1, 10),
            ]);
        }
    }
}
