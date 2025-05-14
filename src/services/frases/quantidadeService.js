const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function contarFrasesTotais() {
  const frases = await carregarFrases();
  return frases.length;
}

module.exports = { contarFrasesTotais };
