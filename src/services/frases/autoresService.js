const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function listarAutoresUnicos() {
  const frases = await carregarFrases();
  return [...new Set(frases.map(f => f.quoteAuthor).filter(Boolean))];
}

module.exports = { listarAutoresUnicos };
