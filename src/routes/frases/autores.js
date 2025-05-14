const express = require('express');
const { listarAutoresUnicos } = require('../../controllers/frases/autoresController');

const router = express.Router();

// Lista de todos os autores únicos presentes nas frases
router.get('/autores', listarAutoresUnicos);

module.exports = router;
