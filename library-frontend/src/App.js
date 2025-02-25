import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookView from './Components/BookView';
import BookForm from './Components/BookForm';
import EditBook from './Components/EditBook';
import BookList from './Components/BookList';
import Home from './Components/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Rota para a página inicial */}
                    <Route path="/" element={<Home />} />

                    {/* Rota para listar todos os livros */}
                    <Route path="/books" element={<BookList />} />

                    {/* Rota para visualizar um livro específico */}
                    <Route path="/books/view/:id" element={<BookView />} />

                    {/* Rota para adicionar um novo livro */}
                    <Route path="/books/new" element={<BookForm />} />

                    {/* Rota para editar um livro existente */}
                    <Route path="/books/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;