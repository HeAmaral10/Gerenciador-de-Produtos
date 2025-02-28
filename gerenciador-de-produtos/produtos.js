// Dados dos produtos em formato JSON 
const produtos = [
    {"cod": 1, "nome": "Camiseta", "preço": 29.99, "estoque": 50, "fornecedor": "Ripcurl"},
    {"cod": 2, "nome": "Calça Jeans", "preço": 79.99, "estoque": 30, "fornecedor": "Calvin Klein"},
    {"cod": 3, "nome": "Tênis Esportivo", "preço": 120.00, "estoque": 40, "fornecedor": "Nike"},
    {"cod": 4, "nome": "Jaqueta de Couro", "preço": 199.90, "estoque": 15, "fornecedor": "Calvin Klein"},
    {"cod": 5, "nome": "Relógio de Pulso", "preço": 59.99, "estoque": 60, "fornecedor": "Rolex"},
    {"cod": 6, "nome": "Bermuda", "preço": 39.99, "estoque": 70, "fornecedor": "Ripcurl"},
    {"cod": 7, "nome": "Mochila", "preço": 49.99, "estoque": 25, "fornecedor": "Oakley"},
    {"cod": 8, "nome": "Boné", "preço": 19.99, "estoque": 100, "fornecedor": "Oakley"},
    {"cod": 9, "nome": "Sapatênis", "preço": 89.99, "estoque": 20, "fornecedor": "TNG"},
    {"cod": 10, "nome": "Óculos de Sol", "preço": 39.90, "estoque": 80, "fornecedor": "Chili Beans"}
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
    return produtos.filter(produto => produto.preço >= 100.00).map(produto => produto.nome);
}

// Função para retornar os nomes dos produtos de um fornecedor indicado pelo usuário
function fornecedorProduct(provedor) {
    return produtos.filter(produto => produto.fornecedor == provedor).map(produto => produto.nome);
}

// Função para retornar a quantidade total de produtos no estoque
function totalProducts() {
    return produtos.reduce((total, produto) => total + produto.estoque, 0)
}

// Exportação das funções e dos dados dos produtos
export default {
    gerarLinha,
    allProducts,
    valueProduct,
    totalProducts,
    fornecedorProduct,
    produtos
};