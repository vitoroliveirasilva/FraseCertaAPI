const express = require('express');
const { buscarFrasesPorPalavraChave } = require('../../controllers/frase_controller');

const router = express.Router();

// Lista de frases que contêm a palavra
router.get('/frase/busca/:palavra', buscarFrasesPorPalavraChave);

module.exports = router;
