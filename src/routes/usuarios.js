var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/confirmarVoto", function (req, res) {
    usuarioController.confirmarVoto(req, res);
});

router.get("/votos", function (req, res) {
    usuarioController.buscarVotos(req, res);
});


router.get("/idadepublico", function (req, res){
    usuarioController.idadepublico(req, res);
});


router.get("/generopublico", function (req, res){
    usuarioController.generopublico(req, res);
});






module.exports = router;