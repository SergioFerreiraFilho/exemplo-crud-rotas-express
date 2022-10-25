const {pegarUsuarioLogado} = require('../usuario/usuario')
const fs = require('fs')

let carrinho = fs.readFileSync(__dirname + "/carrinho.json")

function buscarCarrinhoDoUsuario(token) {
    if (!token) {
        return false
    }

    let usuario = pegarUsuarioLogado(token);
    return JSON.stringify(carrinho)
}

module.exports = {
    buscarCarrinhoDoUsuario,
}