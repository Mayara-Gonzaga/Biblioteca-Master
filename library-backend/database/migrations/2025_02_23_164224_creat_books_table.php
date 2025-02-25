<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('books', function (Blueprint $table) {
        $table->renameColumn('titulo', 'title'); // Renomeia 'titulo' para 'title'
        $table->renameColumn('autor', 'author'); // Renomeia 'autor' para 'author'
    });
}

public function down()
{
    Schema::table('books', function (Blueprint $table) {
        $table->renameColumn('title', 'titulo'); // Renomeia de volta para 'titulo'
        $table->renameColumn('author', 'autor'); // Renomeia de volta para 'autor'
    });
}
};
