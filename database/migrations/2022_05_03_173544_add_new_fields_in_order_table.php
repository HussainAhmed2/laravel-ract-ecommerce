<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNewFieldsInOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->longText('address')->after('user_id');
            $table->string('country')->after('address');
            $table->string('city')->after('country');
            $table->string('state')->after('city');
            $table->integer('zip')->after('state');
            $table->string('payment_method')->after('zip');
            $table->string('source')->after('payment_method');
            $table->integer('shipment_cost')->after('source');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
}
