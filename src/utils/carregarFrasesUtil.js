const fs = require('fs/promises');
const path = require('path');

const filePath = path.resolve('quotes.json');

async function carregarFrases() {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

module.exports = { carregarFrases };
