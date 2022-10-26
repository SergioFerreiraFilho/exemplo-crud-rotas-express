const router = require('express').Router();
const controller = require('./carrinho');

router.get('/carrinho', (req, res) => {
    let token = req.headers.authorization;

    res.send(
        controller.buscarCarrinhoDoUsuario(token)
    )
})

module.exports = router;