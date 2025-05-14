const express = require('express');
const { listarFrasesPorAutor } = require('../../controllers/frases/porAutorController');

const router = express.Router();

// Lista de frases do autor informado
router.get('/frases/autor/:nome', listarFrasesPorAutor);

module.exports = router;
