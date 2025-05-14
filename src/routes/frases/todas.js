const express = require('express');
const { listarTodasAsFrases } = require('../../controllers/frases/todasController');

const router = express.Router();

// Lista todas as frases disponíveis no JSON com paginação
router.get('/frases', listarTodasAsFrases);

module.exports = router;
