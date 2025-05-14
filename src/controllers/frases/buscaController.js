const { buscarFrasesPorPalavraChave } = require('../../services/frases/buscaService');

async function buscarFrasesPorPalavraChaveController(req, res) {
  const palavra = req.params.palavra?.toLowerCase();

  try {
    const { aviso, resultados } = await buscarFrasesPorPalavraChave(palavra);

    if (resultados.length === 0) {
      return res.status(404).json({
        erro: `Nenhuma frase contém a palavra: ${req.params.palavra}`,
        aviso
      });
    }

    return res.status(200).json({ aviso, resultados });
  } catch (err) {
    console.error('Erro ao buscar frases por palavra:', err);
    return res.status(500).json({ erro: 'Erro interno ao buscar frases por palavra.' });
  }
}

module.exports = { buscarFrasesPorPalavraChave: buscarFrasesPorPalavraChaveController };
