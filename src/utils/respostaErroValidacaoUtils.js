function respostaErroValidacao(error, campo = 'Parâmetros inválidos') {
  return {
    erro: campo,
    detalhes: error.details?.map(d => d.message) || []
  };
}

module.exports = { respostaErroValidacao };
