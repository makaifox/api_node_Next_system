const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const db = require('./database');
const app = express();
const port = 5000;


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

let categories = [];

app.get('/api/categories', (req, res) => {
  db.all('SELECT * FROM categories', (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch categories' });
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/categories', (req, res) => {
  const { nome } = req.body;
  const id = uuidv4();
  
  db.run('INSERT INTO categories (id, nome) VALUES (?, ?)', [id, nome], (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to insert category' });
    } else {
      res.status(201).json({ id, nome });
    }
  });
});

app.put('/api/categories/:id', (req, res) => {
  const categoryId = req.params.id;
  const { nome } = req.body;

  db.run('UPDATE categories SET nome = ? WHERE id = ?', [nome, categoryId], (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to update category' });
    } else {
      res.status(200).json({ id: categoryId, nome });
    }
  });
});

app.delete('/api/categories/:id', (req, res) => {
  const categoryId = req.params.id;

  db.run('DELETE FROM categories WHERE id = ?', categoryId, (err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to delete category' });
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  });
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend rodando com sucesso!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
