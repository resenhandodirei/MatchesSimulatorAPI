const express = require('express');
const app = express();

app.use(express.json());

// Importando as rotas
const routes = require('./routes');
app.use('/', routes);

// Middleware de erro (opcional)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
