const { listarFrasesPorAutor } = require('../../services/frases/porAutorService');

async function listarFrasesPorAutorController(req, res) {
  const nome = req.params.nome?.toLowerCase();

  try {
    const resultados = await listarFrasesPorAutor(nome);

    if (resultados.length === 0) {
      return res.status(404).json({ erro: `Nenhuma frase encontrada para o autor: ${req.params.nome}` });
    }

    return res.status(200).json(resultados);
  } catch (err) {
    console.error('Erro ao buscar frases por autor:', err);
    return res.status(500).json({ erro: 'Erro interno ao buscar frases por autor.' });
  }
}

module.exports = { listarFrasesPorAutor: listarFrasesPorAutorController };
