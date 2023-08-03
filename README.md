# API Node Next System

A API Node Next System é a parte backend do projeto Next-System, um sistema de gerenciamento de categorias. Esta API é desenvolvida utilizando Node.js com o framework Express, e é responsável por fornecer os endpoints necessários para realizar as operações CRUD (Create, Read, Update, Delete) em categorias.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Listar todas as categorias cadastradas.
- Criar uma nova categoria.
- Atualizar o nome de uma categoria existente.
- Excluir uma categoria.

## Instalação

Para executar o backend em seu ambiente local, siga os passos abaixo:

1. Clone este repositório para o seu computador:
- git clone https://github.com/seu-usuario/api_node_Next_system.git

2. Acesse a pasta do projeto:
- cd api_node_Next_system

3. Instale as dependências do projeto:
- npm install ou yarn install

4. Inicie o servidor:
- npm start ou yarn start

A API estará disponível no endereço http://localhost:5000.

## Endpoints
- GET /api/categories: Retorna a lista de categorias cadastradas.
- POST /api/categories: Cria uma nova categoria.
- PUT /api/categories/:id: Atualiza o nome de uma categoria existente.
- DELETE /api/categories/:id: Exclui uma categoria.
## Estrutura do Projeto
O projeto possui a seguinte estrutura de diretórios:

- server.js: Contém o código principal do servidor.
- database.js: Contém as configurações e definições do banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite (banco de dados)