# 📘 Frase Certa API

API leve, moderna e inspiradora que fornece frases motivacionais em **inglês** com suporte parcial a **português**, ideal para integrar com websites, apps, bots ou sistemas internos.

---

## 🚀 Funcionalidades

- ✅ Obter frase aleatória (com suporte a tradução para português)
- ✅ Listar todas as frases com paginação (frases exibidas apenas em inglês)
- ✅ Buscar frases por autor (busca parcial e case-insensitive)
- ✅ Buscar frases por palavra-chave (busca realizada apenas em inglês)
- ✅ Listar todos os autores únicos
- ✅ Contar o número total de frases disponíveis
- ✅ Acessar documentação completa via Swagger UI

---

## 📦 Instalação

```bash
git clone https://github.com/vitoroliveirasilva/FraseCertaAPI.git
cd FraseCertaAPI
npm install
````

---

## ▶️ Execução

### Ambiente de desenvolvimento:

```bash
npm run dev
```

### Ambiente de produção:

```bash
npm start
```

---

## 📚 Documentação da API

Acesse em:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Documentação interativa gerada com **Swagger UI**.

---

## 📌 Endpoints principais

### ✅ `GET /frase`

Retorna uma frase aleatória.
**Query:** `?lang=en` ou `?lang=pt`

### ✅ `GET /frases`

Retorna frases paginadas.
**Query:** `?pagina=1&limite=5&lang=pt` ou `?pagina=1&limite=5&lang=en`

### ✅ `GET /frases/autor/{nome}`

Busca frases pelo nome (ou parte) do autor.

### ✅ `GET /autores`

Retorna todos os autores únicos.

### ✅ `GET /frase/busca/{palavra}`

Busca frases contendo a palavra-chave (em **inglês**).
ℹ️ Inclui um aviso na resposta informando a limitação de idioma.

### ✅ `GET /frases/quantidade`

Retorna o total de frases disponíveis.

---

## 📁 Fonte de dados

As frases utilizadas foram extraídas do repositório:
🔗 [https://github.com/JamesFT/Database-Quotes-JSON](https://github.com/JamesFT/Database-Quotes-JSON)

---

## ⚠️ Observações

* As frases são carregadas a partir de um arquivo `quotes.json`.
* Tradução em lote (todas as frases) está **desabilitada** por desempenho.
* A busca por palavra funciona **somente em inglês**.
* A API aceita apenas os idiomas `"en"` e `"pt"` no parâmetro `lang`.

---

## 🛠️ Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Joi](https://joi.dev/)
* [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
* [Google Translate API X](https://www.npmjs.com/package/google-translate-api-x)

---

## 👤 Autor

**Vitor Oliveira Silva**
🔗 [https://github.com/vitoroliveirasilva/FraseCertaAPI](https://github.com/vitoroliveirasilva/FraseCertaAPI)

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
O arquivo da licença está disponível na raiz do repositório: [`LICENSE`](./LICENSE)
