const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function buscarFrasesPorPalavraChave(palavra) {
  const frases = await carregarFrases();
  const palavraLower = palavra.toLowerCase();

  const resultados = frases.filter(f => f.quoteText?.toLowerCase().includes(palavraLower));

  return {
    aviso: 'A busca é feita apenas em frases em inglês. Traduções automáticas não são suportadas.',
    resultados
  };
}

module.exports = { buscarFrasesPorPalavraChave };
