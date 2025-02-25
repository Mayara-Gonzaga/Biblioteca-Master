import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <header>
                <h1>Biblioteca Digital</h1>
                <p>Gerencie seus livros de forma simples e eficiente</p>
                <a href="/books" className="btn">Ver Livros</a>
            </header>
        </div>
    );
}

export default Home;
