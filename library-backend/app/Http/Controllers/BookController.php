<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // Listar todos os livros com paginação
    public function index(Request $request)
    {
        $limit = $request->query('limit', 10); // Define o número de livros por página (padrão: 10)
        $books = Book::paginate($limit); // Usa a paginação do Laravel

        return response()->json([
            'books' => $books->items(), // Retorna apenas os itens da página atual
            'totalPages' => $books->lastPage(), // Total de páginas
            'currentPage' => $books->currentPage(), // Página atual
            'totalItems' => $books->total(), // Total de livros
        ]);
    }


    public function search(Request $request)
    {
        $query = $request->input('query'); // Termo de busca

        $livros = Book::where('title', 'LIKE', "%$query%")
                       ->orWhere('author', 'LIKE', "%$query%")
                       ->get();

        return response()->json($livros);
    }


    public function exibir($id)
    {
        $livro = Book::find($id);
    
        if ($livro) {
            return response()->file(storage_path('app/' . $livro->arquivo)); // Ajuste o caminho conforme necessário
        }
    
        return response()->json(['error' => 'Livro não encontrado.'], 404);
    }



    // Cadastrar um livro
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $book = Book::create($validated);
        return response()->json($book, 201);
    }

    // Mostrar um livro específico (para edição)
    public function show($id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book);
    }

    // Atualizar um livro
    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $book->update($validated);
        return response()->json($book);
    }

    // Deletar um livro
    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(['message' => 'Livro deletado com sucesso']);
    }
}
