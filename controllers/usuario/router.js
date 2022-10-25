const router = require('express').Router();
const usuarioController = require('./usuario');

router.get('/usuarios', (req, res) => {
    res.send(
        usuarioController.listar()
    )
});

router.get('/usuarios/:id', (req, res) => {
    res.send(
        usuarioController.buscar(req.params.id)
    )
});

router.post('/login', (req, res) => {
    let {email, senha} = req.body;

    res.send(
        usuarioController.auth(email, senha)
    )
});

module.exports = router;