const Joi = require('joi');

const paginacaoSchema = Joi.object({
  pagina: Joi.number().integer().min(1).default(1),
  limite: Joi.number().integer().min(1).max(100).default(5),
});

module.exports = { paginacaoSchema };
