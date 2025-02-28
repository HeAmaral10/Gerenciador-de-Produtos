// Importação das funções e dados do arquivo produto.js
import produto from "./produtos.js";

// Chamada das funções
console.log("SISTEMA DE GERENCIAMENTO DE PRODUTOS");
console.log(produto.gerarLinha(80));
console.log(produto.allProducts());
console.log(produto.gerarLinha(80));
console.log(`${produto.valueProduct()}`);
console.log(produto.gerarLinha(80));
console.log(produto.totalProducts());
console.log(produto.gerarLinha(80));
console.log(`${produto.fornecedorProduct("Oakley")}`);