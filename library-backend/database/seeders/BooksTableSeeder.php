<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BooksTableSeeder extends Seeder
{
    public function run()
    {
        // Criar 40 livros diferentes
        $books = [
            ['title' => 'O Senhor dos Anéis', 'author' => 'J.R.R. Tolkien', 'description' => 'Uma aventura épica na Terra Média.'],
            ['title' => '1984', 'author' => 'George Orwell', 'description' => 'Um futuro distópico sobre vigilância total.'],
            ['title' => 'Dom Casmurro', 'author' => 'Machado de Assis', 'description' => 'Um dos maiores clássicos da literatura brasileira.'],
            ['title' => 'O Pequeno Príncipe', 'author' => 'Antoine de Saint-Exupéry', 'description' => 'Uma história poética sobre a essência da vida.'],
            ['title' => 'Cem Anos de Solidão', 'author' => 'Gabriel García Márquez', 'description' => 'A saga da família Buendía em Macondo.'],
            ['title' => 'O Hobbit', 'author' => 'J.R.R. Tolkien', 'description' => 'A jornada de Bilbo Bolseiro e os anões.'],
            ['title' => 'Crime e Castigo', 'author' => 'Fiódor Dostoiévski', 'description' => 'O conflito moral de um jovem assassino.'],
            ['title' => 'A Revolução dos Bichos', 'author' => 'George Orwell', 'description' => 'Uma fábula política sobre o poder.'],
            ['title' => 'Orgulho e Preconceito', 'author' => 'Jane Austen', 'description' => 'Um romance clássico sobre amor e sociedade.'],
            ['title' => 'Memórias Póstumas de Brás Cubas', 'author' => 'Machado de Assis', 'description' => 'Uma narrativa inovadora do século XIX.'],
            ['title' => 'O Nome do Vento', 'author' => 'Patrick Rothfuss', 'description' => 'As memórias do jovem mago Kvothe.'],
            ['title' => 'As Crônicas de Nárnia', 'author' => 'C.S. Lewis', 'description' => 'Uma série de aventuras em um mundo mágico.'],
            ['title' => 'O Código Da Vinci', 'author' => 'Dan Brown', 'description' => 'Um thriller sobre símbolos e mistérios religiosos.'],
            ['title' => 'Moby Dick', 'author' => 'Herman Melville', 'description' => 'A obsessão do Capitão Ahab pela grande baleia branca.'],
            ['title' => 'O Iluminado', 'author' => 'Stephen King', 'description' => 'Um suspense aterrorizante em um hotel isolado.'],
            ['title' => 'Drácula', 'author' => 'Bram Stoker', 'description' => 'A história do vampiro mais famoso do mundo.'],
            ['title' => 'Os Miseráveis', 'author' => 'Victor Hugo', 'description' => 'Uma história épica sobre justiça e redenção.'],
            ['title' => 'O Morro dos Ventos Uivantes', 'author' => 'Emily Brontë', 'description' => 'Uma intensa história de amor e vingança.'],
            ['title' => 'Alice no País das Maravilhas', 'author' => 'Lewis Carroll', 'description' => 'Uma viagem ao mundo da imaginação.'],
            ['title' => 'O Retrato de Dorian Gray', 'author' => 'Oscar Wilde', 'description' => 'A história de um jovem que nunca envelhece.'],
            ['title' => 'Harry Potter e a Pedra Filosofal', 'author' => 'J.K. Rowling', 'description' => 'O início da jornada do jovem bruxo.'],
            ['title' => 'Percy Jackson e o Ladrão de Raios', 'author' => 'Rick Riordan', 'description' => 'Um semideus descobre seu destino.'],
            ['title' => 'O Apanhador no Campo de Centeio', 'author' => 'J.D. Salinger', 'description' => 'A rebeldia da juventude nos anos 50.'],
            ['title' => 'A Metamorfose', 'author' => 'Franz Kafka', 'description' => 'Um homem acorda transformado em inseto.'],
            ['title' => 'Senhor das Moscas', 'author' => 'William Golding', 'description' => 'Crianças presas em uma ilha lutam para sobreviver.'],
            ['title' => 'Os Três Mosqueteiros', 'author' => 'Alexandre Dumas', 'description' => 'As aventuras de d’Artagnan e seus amigos.'],
            ['title' => 'O Médico e o Monstro', 'author' => 'Robert Louis Stevenson', 'description' => 'Um conto sobre a dualidade humana.'],
            ['title' => 'O Castelo', 'author' => 'Franz Kafka', 'description' => 'Um homem tenta entrar em um castelo misterioso.'],
            ['title' => 'O Conde de Monte Cristo', 'author' => 'Alexandre Dumas', 'description' => 'Uma história de vingança e redenção.'],
            ['title' => 'Duna', 'author' => 'Frank Herbert', 'description' => 'Uma ficção científica épica.'],
            ['title' => 'Fundação', 'author' => 'Isaac Asimov', 'description' => 'A saga da queda e ascensão de um império galáctico.'],
            ['title' => 'A Guerra dos Tronos', 'author' => 'George R.R. Martin', 'description' => 'O início da disputa pelo Trono de Ferro.'],
            ['title' => 'O Chamado de Cthulhu', 'author' => 'H.P. Lovecraft', 'description' => 'O horror cósmico no seu melhor.'],
            ['title' => 'Admirável Mundo Novo', 'author' => 'Aldous Huxley', 'description' => 'Uma distopia sobre o futuro da sociedade.'],
            ['title' => 'A Batalha do Apocalipse', 'author' => 'Eduardo Spohr', 'description' => 'Anjos e demônios em guerra.'],
            ['title' => 'O Silmarillion', 'author' => 'J.R.R. Tolkien', 'description' => 'A mitologia da Terra Média.'],
            ['title' => 'O Homem Invisível', 'author' => 'H.G. Wells', 'description' => 'Um cientista descobre o segredo da invisibilidade.'],
            ['title' => 'O Lobo da Estepe', 'author' => 'Hermann Hesse', 'description' => 'Uma obra filosófica e existencialista.'],
            ['title' => 'A Torre Negra', 'author' => 'Stephen King', 'description' => 'Uma saga épica de fantasia sombria.']
        ];

        // Inserir os livros no banco de dados
        foreach ($books as $book) {
            Book::create($book);
        }
    }
}