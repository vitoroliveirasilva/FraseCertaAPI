const translate = require('google-translate-api-x');
const { idiomaSchema } = require('../schemas/idiomaSchema');


// Serviço responsável por traduzir um texto para o idioma especificado
async function traduzirTexto(texto, para = 'en') {
  const { error, value: idioma } = idiomaSchema.validate(para);

  if (error) {
    console.warn(`Idioma inválido informado: "${para}". Usando idioma padrão "en".`);
  }

  if (typeof texto !== 'string' || texto.trim().length === 0) {
    console.warn('Texto inválido para tradução. Retornando original.');
    return texto;
  }

  try {
    const { text: traduzido } = await translate(texto, { to: idioma });
    return traduzido;
  } catch (err) {
    console.error('Erro ao traduzir texto:', err.message || err);
    return texto; // fallback para texto original
  }
}

module.exports = {
  traduzirTexto,
};
