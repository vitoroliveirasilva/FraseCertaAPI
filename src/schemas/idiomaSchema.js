const Joi = require('joi');

const idiomaSchema = Joi.string()
  .trim()
  .min(1)
  .valid('en', 'pt')
  .default('en')
  .messages({
    'any.only': 'Idioma inválido. Os valores aceitos são: en, pt.',
    'string.base': 'O idioma deve ser uma string.',
    'string.empty': 'O idioma não pode estar vazio.',
    'string.min': 'O idioma não pode estar vazio.'
  });

module.exports = { idiomaSchema };
