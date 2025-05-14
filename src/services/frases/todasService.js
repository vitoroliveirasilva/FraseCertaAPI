const { carregarFrases } = require('../../utils/carregarFrasesUtil');

async function listarTodasAsFrases(pagina = 1, limite = 5, lang = 'en') {
  const frases = await carregarFrases();

  const inicio = (pagina - 1) * limite;
  const fim = inicio + limite;
  const paginadas = frases.slice(inicio, fim);

  const resposta = {
    total: frases.length,
    pagina,
    limite,
    resultados: paginadas
  };

  if (lang !== 'en') {
    resposta.aviso = "Tradução automática de frases em lote está desativada por motivos de desempenho. Frases retornadas em inglês.";
  }

  return resposta;
}

module.exports = { listarTodasAsFrases };
