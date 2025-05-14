const Joi = require('joi');

const paginacaoSchema = Joi.object({
  pagina: Joi.number()
    .integer()
    .min(1)
    .default(1)
    .messages({
      'number.base': 'O número da página deve ser um número inteiro.',
      'number.integer': 'A página deve ser um número inteiro.',
      'number.min': 'A página deve ser no mínimo 1.'
    }),
  limite: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(5)
    .messages({
      'number.base': 'O limite deve ser um número inteiro.',
      'number.integer': 'O limite deve ser um número inteiro.',
      'number.min': 'O limite deve ser no mínimo 1.',
      'number.max': 'O limite deve ser no máximo 100.'
    }),
  lang: Joi.string()
    .trim()
    .min(1)
    .valid('en', 'pt')
    .default('en')
    .messages({
      'any.only': 'Idioma inválido. Os valores aceitos são: en, pt.',
      'string.base': 'O idioma deve ser uma string.',
      'string.empty': 'O idioma não pode estar vazio.',
      'string.min': 'O idioma não pode estar vazio.'
    }),
});

module.exports = { paginacaoSchema };
