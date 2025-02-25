import React, { useState } from "react";
import styles from './BookForm.module.css';


const BookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      title,
      author,
      description,
    };

    fetch("http://localhost:8000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Livro adicionado com sucesso!");
        setTitle("");
        setAuthor("");
        setDescription("");

        if (onBookAdded) {
          onBookAdded(data); // Atualiza a lista de livros na página principal
        }
      })
      .catch((error) => console.error("Erro ao adicionar livro:", error));
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.titulo}>Adicionar Livro</h1>
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className={`${styles.botao} ${styles['botao-deletar']}`}type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default BookForm;
