const express = require('express');
const { contarFrasesTotais } = require('../../controllers/frase_controller');

const router = express.Router();

// Retorna a quantidade total de frases disponíveis
router.get('/frases/quantidade', contarFrasesTotais);

module.exports = router;
