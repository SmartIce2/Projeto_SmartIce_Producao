var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/ultimasveiculo/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidasveiculo(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/tempo-realveiculos/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoRealveiculos(req, res);
})

module.exports = router;