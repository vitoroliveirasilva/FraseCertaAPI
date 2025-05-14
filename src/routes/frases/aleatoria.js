const express = require('express');
const { obterFraseAleatoria } = require('../../controllers/frase_controller');

const router = express.Router();

// Retorna uma frase aleatória e seu autor
router.get('/frase', obterFraseAleatoria);

module.exports = router;
