var express = require("express");
var router = express.Router();
var fetchMahasiswasController = require("../controllers/fetchMahasiswasController");

router.get("/", fetchMahasiswasController.index);

module.exports = router;
