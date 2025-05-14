const Joi = require('joi');

const idiomaSchema = Joi.string().valid('en', 'pt', 'es', 'fr', 'de', 'it', 'ja', 'zh-cn').default('en');

module.exports = { idiomaSchema };
