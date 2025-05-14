const { paginacaoSchema } = require('../../schemas/paginacaoSchema');
const { listarTodasAsFrases } = require('../../services/frases/todasService');
const { respostaErroValidacao } = require('../../utils/respostaErroValidacaoUtils');

async function listarTodasAsFrasesController(req, res) {
  const { error, value } = paginacaoSchema.validate(req.query);

  if (error) {
    return res.status(400).json(respostaErroValidacao(error, 'Parâmetros de paginação inválidos'));
  }

  const { pagina, limite } = value;
  const lang = req.query.lang || 'en';

  try {
    const resultado = await listarTodasAsFrases(pagina, limite, lang);
    return res.status(200).json(resultado);
  } catch (err) {
    console.error('Erro ao listar frases paginadas:', err);
    return res.status(500).json({ erro: 'Erro interno ao listar frases.' });
  }
}

module.exports = { listarTodasAsFrases: listarTodasAsFrasesController };
