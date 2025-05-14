const { contarFrasesTotais } = require('../../services/frases/quantidadeService');

async function contarFrasesTotaisController(req, res) {
  try {
    const total = await contarFrasesTotais();
    return res.status(200).json({ total });
  } catch (err) {
    console.error('Erro ao contar frases:', err);
    return res.status(500).json({ erro: 'Erro interno ao contar frases.' });
  }
}

module.exports = { contarFrasesTotais: contarFrasesTotaisController };
