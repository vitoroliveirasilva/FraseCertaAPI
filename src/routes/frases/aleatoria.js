const express = require('express');
const { obterFraseAleatoria } = require('../../controllers/frases/aleatoriaController');

const router = express.Router();

// Retorna uma frase aleatória e seu autor
router.get('/frase', obterFraseAleatoria);

module.exports = router;
