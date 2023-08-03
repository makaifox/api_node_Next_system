const sqlite3 = require('sqlite3').verbose();

// Cria ou abre o banco de dados (se não existir, será criado)
const db = new sqlite3.Database('database.db');

// Cria a tabela 'categories' (se ainda não existir)
db.run(`
  CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    nome TEXT
  )
`);

module.exports = db;
