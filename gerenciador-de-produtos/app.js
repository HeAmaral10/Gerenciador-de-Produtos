// Importação das funções e dados do arquivo produto.js
import produto from "./produtos.js";

// Chamada das funções
console.log("SISTEMA DE GERENCIAMENTO DE PRODUTOS");
console.log(produto.gerarLinha(80));
console.log("Lista de Todos os Produtos");
console.log(produto.allProducts());
console.log(produto.gerarLinha(80));
console.log("Produtos Acima de R$100");
console.log(`${produto.valueProduct()}`);
console.log(produto.gerarLinha(80));
console.log("Quantidade Total de Produtos");
console.log(produto.totalProducts());
console.log(produto.gerarLinha(80));
console.log("Produtos de Fornecedor Especifíco");
console.log("Oakley");
console.log(`${produto.fornecedorProduct("Oakley")}`);
console.log(produto.gerarLinha(80));
console.log("Valor Total do Estoque");
console.log("R$ " + produto.valueTotalProducts());