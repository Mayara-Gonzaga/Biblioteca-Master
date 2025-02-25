<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Laravel backend está rodando!';
});

Route::get('/teste', function () {
    return response()->json([
        'mensagem' => 'Rota funcionando!'
    ]);
});
