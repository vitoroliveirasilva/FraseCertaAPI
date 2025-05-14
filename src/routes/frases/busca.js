const express = require('express');
const { buscarFrasesPorPalavraChave } = require('../../controllers/frases/buscaController');

const router = express.Router();

// Lista de frases que contêm a palavra
router.get('/frase/busca/:palavra', buscarFrasesPorPalavraChave);

module.exports = router;
