<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

// Define um grupo de rotas com o prefixo "books"
Route::prefix('books')->group(function () {

    // Rota para listar todos os livros (paginação de 10 livros por página)
    Route::get('/', [BookController::class, 'index']); 

    // Rota para criar um novo livro (requisição POST)
    Route::post('/', [BookController::class, 'store']); 

    // Rota para buscar livros pelo título (requisição GET com parâmetro de busca)
    Route::get('/search', [BookController::class, 'search']);

    // Rota para visualizar um livro específico pelo ID
    Route::get('/{id}', [BookController::class, 'show']); 

    // Rota para atualizar um livro existente pelo ID
    Route::put('/{id}', [BookController::class, 'update']); 

    // Rota para deletar um livro pelo ID
    Route::delete('/{id}', [BookController::class, 'destroy']); 

    // Rota para exibir detalhes do livro (caso seja uma página específica)
    Route::get('/view/{id}', [BookController::class, 'exibir']); 
});
