<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('subjects');
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('level_id');
            $table->unsignedBigInteger('specialize_id');
            $table->foreign('level_id')->references('id')->on('levels')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('specialize_id')->references('id')->on('specializes')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subjects');
    }
};
