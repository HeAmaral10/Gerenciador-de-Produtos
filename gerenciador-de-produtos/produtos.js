// Dados dos produtos em formato JSON 
const produtos = [
    {"cod": 1, "nome": "Camiseta", "preco": 29.99, "estoque": 50, "fornecedor": "Ripcurl"},
    {"cod": 2, "nome": "Calça Jeans", "preco": 79.99, "estoque": 30, "fornecedor": "Calvin Klein"},
    {"cod": 3, "nome": "Tênis Esportivo", "preco": 120.00, "estoque": 40, "fornecedor": "Nike"},
    {"cod": 4, "nome": "Jaqueta de Couro", "preco": 199.90, "estoque": 15, "fornecedor": "Calvin Klein"},
    {"cod": 5, "nome": "Relógio de Pulso", "preco": 59.99, "estoque": 60, "fornecedor": "Rolex"},
    {"cod": 6, "nome": "Bermuda", "preco": 39.99, "estoque": 70, "fornecedor": "Ripcurl"},
    {"cod": 7, "nome": "Mochila", "preco": 49.99, "estoque": 25, "fornecedor": "Oakley"},
    {"cod": 8, "nome": "Boné", "preco": 19.99, "estoque": 100, "fornecedor": "Oakley"},
    {"cod": 9, "nome": "Sapatênis", "preco": 89.99, "estoque": 20, "fornecedor": "TNG"},
    {"cod": 10, "nome": "Óculos de Sol", "preco": 39.90, "estoque": 80, "fornecedor": "Chili Beans"}
];

// Função para gerar linha com hífen para separar os resultados das funções
function gerarLinha(tamanho) {
    let linha = '';
    for (let i = 0; i < tamanho; i++) {
        linha+='-'
    }
    return linha;
}

// Função para retornar todos os produtos
function allProducts() {
    return produtos;
}

// Função para retornar os nomes dos produtos acima de 100 reais
function valueProduct() {
    return produtos.filter(produto => produto.preco >= 100.00).map(produto => produto.nome);
}

// Função para retornar os nomes dos produtos de um fornecedor indicado pelo usuário
function fornecedorProduct(provedor) {
    return produtos.filter(produto => produto.fornecedor == provedor).map(produto => produto.nome);
}

// Função para retornar a quantidade total de produtos no estoque
function totalProducts() {
    return produtos.reduce((total, produto) => total + produto.estoque, 0)
}

// Função para retornar o valor total do estoque
function valueTotalProducts() {
    return produtos.reduce((total, produto) => total + (produto.estoque * produto.preco), 0)
}

// Exportação das funções e dos dados dos produtos
export default {
    gerarLinha,
    allProducts,
    valueProduct,
    totalProducts,
    fornecedorProduct,
    valueTotalProducts,
    produtos
};