import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Melhor para navegação no React
import BookForm from "./BookForm"; // Importa o formulário
import styles from './BookList.module.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate(); // Para navegação com React Router

  // Busca livros na API
  useEffect(() => {
    fetch(`http://localhost:8000/api/books?page=${currentPage}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books || []);
        setTotalPages(data.totalPages || 1);
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, [currentPage]); // Atualiza quando muda a página

  // Função para deletar um livro
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja deletar este livro?")) {
      fetch(`http://localhost:8000/api/books/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao deletar livro");
          }
          return response.json();
        })
        .then(() => {
          alert("Livro deletado com sucesso!");
          setBooks(books.filter(book => book.id !== id)); // Atualiza a lista sem recarregar a página
        })
        .catch((error) => console.error("Erro ao deletar livro:", error));
    }
  };

  // Paginação
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Lista de Livros</h1>

      {/* Tabela de livros */}
      <table className={styles.lista}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="4">Nenhum livro encontrado.</td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <button className={styles.botao} onClick={() => navigate(`/books/view/${book.id}`)}>
                    Visualizar
                  </button>
                  <button className={styles.botao} onClick={() => navigate(`/books/edit/${book.id}`)}>
                    Editar
                  </button>
                  <button className={`${styles.botao} ${styles['botao-deletar']}`} onClick={() => handleDelete(book.id)}>
                    Deletar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Paginação */}
      <div className={styles.paginacao}>
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span> Página {currentPage} de {totalPages} </span>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>

      {/* Formulário para adicionar livros */}
      <BookForm onBookAdded={(newBook) => setBooks(prevBooks => [...prevBooks, newBook])} />
    </div>
  );
};

export default BookList;