const express = require('express');
const { listarAutoresUnicos } = require('../../controllers/frase_controller');

const router = express.Router();

// Lista de todos os autores únicos presentes nas frases
router.get('/autores', listarAutoresUnicos);

module.exports = router;
