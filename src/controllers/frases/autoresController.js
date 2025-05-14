const { listarAutoresUnicos } = require('../../services/frases/autoresService');

async function listarAutoresUnicosController(req, res) {
  try {
    const autores = await listarAutoresUnicos();
    return res.status(200).json(autores);
  } catch (err) {
    console.error('Erro ao listar autores:', err);
    return res.status(500).json({ erro: 'Erro interno ao listar autores.' });
  }
}

module.exports = { listarAutoresUnicos: listarAutoresUnicosController };
