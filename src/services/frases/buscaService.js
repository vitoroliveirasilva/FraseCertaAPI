const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function buscarFrasesPorPalavraChave(palavra) {
  const frases = await carregarFrases();
  const palavraLower = palavra.toLowerCase();

  return frases.filter(f => f.quoteText?.toLowerCase().includes(palavraLower));
}

module.exports = { buscarFrasesPorPalavraChave };
