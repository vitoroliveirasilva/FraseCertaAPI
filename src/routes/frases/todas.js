const express = require('express');
const { listarTodasAsFrases } = require('../../controllers/frase_controller');

const router = express.Router();

// Lista todas as frases disponíveis no JSON com paginação
router.get('/frases', listarTodasAsFrases);

module.exports = router;
