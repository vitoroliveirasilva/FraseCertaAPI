const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function listarFrasesPorAutor(nome) {
  const frases = await carregarFrases();
  const nomeLower = nome.toLowerCase();

  return frases.filter(f => f.quoteAuthor?.toLowerCase().includes(nomeLower));
}

module.exports = { listarFrasesPorAutor };
