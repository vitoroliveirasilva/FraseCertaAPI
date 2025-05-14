const fs = require('fs/promises');
const path = require('path');

async function carregarFrases() {
  try {
    const quotesPath = path.join(__dirname, '..', '..', 'quotes.json');
    const data = await fs.readFile(quotesPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao carregar quotes.json:', err);
    throw err;
  }
}

module.exports = { carregarFrases };
