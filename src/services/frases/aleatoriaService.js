const { traduzirTexto } = require('../traducaoService');
const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function buscarFraseAleatoria(lang = 'en') {
  const frases = await carregarFrases();

  if (!Array.isArray(frases) || frases.length === 0) {
    throw new Error('Arquivo de frases está vazio ou inválido');
  }

  const aleatoria = frases[Math.floor(Math.random() * frases.length)];

  if (!aleatoria?.quoteText || !aleatoria?.quoteAuthor) {
    throw new Error('Frase ou autor inválido no arquivo');
  }

  let frase = aleatoria.quoteText;
  const autor = aleatoria.quoteAuthor;

  if (lang === 'pt') {
    try {
      frase = await traduzirTexto(frase, 'pt');
    } catch {
      // fallback silencioso
    }
  }

  return { frase, autor };
}

module.exports = { buscarFraseAleatoria };
