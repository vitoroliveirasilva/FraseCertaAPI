const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function listarTodasAsFrases(pagina = 1, limite = 5) {
  const frases = await carregarFrases();

  const inicio = (pagina - 1) * limite;
  const fim = inicio + limite;
  const paginadas = frases.slice(inicio, fim);

  return {
    total: frases.length,
    pagina,
    limite,
    resultados: paginadas
  };
}

module.exports = { listarTodasAsFrases };
