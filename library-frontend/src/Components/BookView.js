import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './BookView.module.css';

const API_BASE_URL = 'http://localhost:8000'; // Ajuste conforme o backend, considerando a porta do backend Laravel

function BookView() {
    const { id } = useParams(); // Obtém o ID do livro da URL
    const [book, setBook] = useState(null); // Estado para armazenar os dados do livro
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros

    useEffect(() => {
        // Função para buscar os detalhes do livro
        const fetchBook = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/books/${id}`);
                setBook(response.data); // Atualiza o estado com os dados do livro
                setError(null); // Limpa qualquer erro anterior
            } catch (error) {
                console.error('Erro ao carregar livro:', error);
                setError('Erro ao carregar livro. Tente novamente mais tarde.'); // Define a mensagem de erro
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchBook(); // Chama a função para buscar o livro
    }, [id]); // Executa o efeito sempre que o ID mudar

    // Exibe uma mensagem de carregamento enquanto os dados são buscados
    if (loading) {
        return <p>Carregando...</p>;
    }

    // Exibe uma mensagem de erro se ocorrer um problema na requisição
    if (error) {
        return <p>{error}</p>;
    }

    // Exibe uma mensagem se o livro não for encontrado
    if (!book) {
        return <p>Livro não encontrado.</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>{book.title}</h1>
            <div className={styles.detalhes}>
                <p><strong>Autor:</strong> {book.author}</p>
                <p><strong>Descrição:</strong> {book.description}</p>
                {/* Se tiver mais dados, você pode exibi-los aqui */}
            </div>
            <Link to="/books" className={styles.botaoVoltar}>
                Voltar para a lista de livros
            </Link>
        </div>
    );
}

export default BookView;