const { idiomaSchema } = require('../../schemas/idiomaSchema');
const { buscarFraseAleatoria } = require('../../services/frases/aleatoriaService');

async function obterFraseAleatoria(req, res) {
  const { error, value: lang } = idiomaSchema.validate(req.query.lang, { stripUnknown: true });

  if (error) {
    return res.status(400).json({
      erro: 'Parâmetro de idioma inválido',
      detalhes: error.details.map(detail => detail.message),
    });
  }

  try {
    const { frase, autor } = await buscarFraseAleatoria(lang);
    return res.status(200).json({ frase, autor });
  } catch (err) {
    console.error('Erro ao obter frase aleatória:', err);
    return res.status(500).json({ erro: 'Erro interno ao obter frase aleatória.' });
  }
}

module.exports = { obterFraseAleatoria };
