const express = require('express');
const aleatoria = require('./frases/aleatoria');
const todas = require('./frases/todas');
const porAutor = require('./frases/porAutor');
const autores = require('./frases/autores');
const busca = require('./frases/busca');
const quantidade = require('./frases/quantidade');

const router = express.Router();

router.use(aleatoria);
router.use(todas);
router.use(porAutor);
router.use(autores);
router.use(busca);
router.use(quantidade);

module.exports = router;
