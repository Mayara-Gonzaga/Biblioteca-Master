import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './EditBook.module.css';

const API_BASE_URL = 'http://localhost:3000';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/books/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar livro:', error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${API_BASE_URL}/api/books/${id}`, book)
      .then(() => {
        alert('Livro atualizado com sucesso!');
        navigate('/books');
      })
      .catch(error => {
        console.error('Erro ao atualizar livro:', error);
        alert('Não foi possível atualizar o livro.');
      });
  };

  const handleDelete = () => {
    axios.delete(`${API_BASE_URL}/api/books/${id}`)
      .then(() => {
        alert('Livro deletado com sucesso!');
        navigate('/books');
      })
      .catch(error => {
        console.error('Erro ao deletar livro:', error);
        alert('Não foi possível deletar o livro.');
      });
  };

  if (loading) return <p>Carregando livro...</p>;

  return (
    <div className={styles.container}>
    <h1 className={styles.titulo}>Editar Livro</h1>
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div>
          <label>Título:</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" name="author" value={book.author} onChange={handleChange} />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea name="description" value={book.description} onChange={handleChange} />
        </div>
        <button className={`${styles.botao} ${styles['botao-deletar']}`}type="submit">Salvar</button>
        <button className={`${styles.botao} ${styles['botao-deletar']}`}type="button" onClick={() => navigate('/books')}>Cancelar</button>
      </form>
      <p>
      </p>
      <button className={`${styles.botao} ${styles['botao-deletar']}`}onClick={handleDelete}>Deletar Livro</button>
    </div>
  );
}

export default EditBook;
