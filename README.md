# 📚 **Biblioteca**  
Este é um projeto **full stack** de uma **Biblioteca**, desenvolvido com **Laravel** (backend) e **React + Vite** (frontend).  

O sistema permite:  
✅ **Cadastrar, listar, editar, visualizar e deletar livros** (CRUD)  
✅ **Buscar livros pelo título**  
✅ **Paginação** (10 livros por página)  
✅ **Interface responsiva**  
✅ **Backend estruturado com boas práticas**  

---

## 🚀 **Tecnologias Utilizadas**  

### 🔹 **Backend**  
- Laravel (PHP)  
- MySQL  

### 🔹 **Frontend**  
- React + Vite  
- Axios (para consumo da API)  
- React Router  

### 🔹 **Gerenciadores de Pacotes**  
- Composer (para Laravel)  
- npm (para React)  

---

## ⚙ **Pré-requisitos**  

Antes de começar, certifique-se de ter instalado:  

- **PHP** >= 8.1  
- **Composer**  
- **MySQL**  
- **Node.js** >= 16  
- **XAMPP** ou outro servidor local (se necessário)  

---

## 🔧 **Configuração do Backend (Laravel)**  

### **1️⃣ Clone o repositório**  
```bash
git clone https://github.com/Mayara-Gonzaga/Biblioteca.git
cd Biblioteca
```

### **2️⃣ Acesse a pasta do backend**  
```bash
cd library-backend
```

### **3️⃣ Instale as dependências**  
```bash
composer install
npm install
```

### **4️⃣ Configure as variáveis de ambiente**  
```bash
cp .env.example .env
```
No arquivo **`.env`**, edite as credenciais do banco de dados:  
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=library
DB_USERNAME=root
DB_PASSWORD=
```

### **5️⃣ Crie a base de dados e execute as migrations**  
```bash
php artisan migrate --seed
```
(O `--seed` preenche a base de dados com registros iniciais, se houver.)  

### **6️⃣ Gere a chave da aplicação**  
```bash
php artisan key:generate
```

### **7️⃣ Inicie o servidor Laravel**  
```bash
php artisan serve
```
O backend estará disponível em **http://127.0.0.1:8000**.  

---

## 🎨 **Configuração do Frontend (React + Vite)**  

### **1️⃣ Acesse a pasta do frontend**  
```bash
cd ../library-frontend
```

### **2️⃣ Instale as dependências**  
```bash
npm install
```

### **3️⃣ Configure as variáveis de ambiente**  
Crie um arquivo **`.env`** dentro da pasta **`library-frontend`** e adicione:  
```env
VITE_API_URL=http://127.0.0.1:8000/api
```

### **4️⃣ Inicie o frontend**  
```bash
npm start
```
O frontend estará disponível em **http://localhost:3000**.  

---

## 📌 **Funcionalidades**  

✅ Cadastro, listagem, edição, visualização e remoção de livros (**CRUD**)  
✅ Campo de busca por título na listagem  
✅ Paginação com 10 livros por página  
✅ Interface responsiva  
✅ Backend estruturado com boas práticas  

---

## 📝 **Licença**  

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e melhorá-lo!
