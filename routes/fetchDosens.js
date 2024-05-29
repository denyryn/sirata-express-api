var express = require("express");
var router = express.Router();
var fetchDosensController = require("../controllers/fetchDosensController");

router.get("/", fetchDosensController.index);

module.exports = router;
