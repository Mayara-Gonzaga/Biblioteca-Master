<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // Definir os campos que podem ser preenchidos de forma massiva
    protected $fillable = [
        'title', 'author', 'description', // Adicione outros campos conforme necessário
    ];
}