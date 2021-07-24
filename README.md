# API Escola - Entidade Alunos 📚

O projeto é uma API feita utilizando JavaScript, Node.JS, Express e SQLite como biblioteca que simula um banco de dados
 e a ORM Sequelize. Foi utilizado também o padrão MVC para arquitetura do projeto.

## 📕Instalando as dependências:

### 1- Realize o git clone do repositório para a sua máquina:

```bash
  git clone https://github.com/pedroperalva/Projeto_modulo_4_API-Escola.git
```
### 2- Instale as dependências do projeto:
```bash
  npm install
```

## 📗Utilizando a API:

### 1- Ligue o servidor utilizando o nodemon:
```bash
  npm start
```
### 2- Você deverá ter na sua máquina um programa para fazer as requisições, como Insomnia ou Postman, por exemplo, e utilizar as seguintes rotas:
```bash
  GET: "http://localhost:3032/alunos"
  //Buscar todos os alunos no bd
  GET: "http://localhost:3032/alunos/:email" 
  // Buscar alunos específicos por email como parâmetro
  POST: "http://localhost:3032/alunos" 
  // Inserir alunos no banco de dados passando um JSON pelo body
  PUT: "http://localhost:3032/alunos/:email" 
  // Modificar alunos específicos por email como parâmetro (é necessário inserir todos os dados passando um JSON pelo body)
  DELETE: "http://localhost:3032/alunos/:email" 
  // Deletar alunos específicos por email como parâmetro
```
## 📘Realizando os testes:

### 1- Para executar os testes, utilize o comando:

```bash
  npm test
```

  
