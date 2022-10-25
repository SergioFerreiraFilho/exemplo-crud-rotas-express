
let fs = require('fs');

function listar() {
    return fs.readFileSync('controllers/produto/produtos.chuchu');
}

function criar(produto) {
    let produtos = listar()
    console.log(typeof produtos)
    produtos.push(produto);
    return produtos
}

function atualizar() {
    return "Atualizar produto"
}

function deletar(produto_id) {
    produtos = produtos.filter((prod) => prod.id != produto_id)
    return JSON.stringify(produtos)
}

module.exports = {
    listar: listar,
    criar: criar,
    atualizar: atualizar,
    deletar: deletar
}