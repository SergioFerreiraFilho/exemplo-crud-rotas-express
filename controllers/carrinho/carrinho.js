const {pegarUsuarioLogado} = require('../usuario/usuario');
const fs = require('fs');

let carrinho = JSON.parse(fs.readFileSync(__dirname + "/carrinho.json"));

function buscarCarrinhoDoUsuario(token) {
    if (!token) {
        return false;
    }

    let usuario = pegarUsuarioLogado(token);

    let resultado = carrinho.filter(cadaItem => cadaItem.usuario === usuario.id);

    return JSON.stringify(resultado);
}

module.exports = {
    buscarCarrinhoDoUsuario,
}