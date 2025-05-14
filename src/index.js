const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const frasesRouter = require('./routes/frases_route');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/', frasesRouter);

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

module.exports = app;
