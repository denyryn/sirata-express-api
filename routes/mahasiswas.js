var express = require("express");
var router = express.Router();
var mahasiswaController = require("../controllers/mahasiswasController");

router.get("/", mahasiswaController.getAll);
router.post("/", mahasiswaController.createData);
router.get("/:id", mahasiswaController.getDataById);
router.put("/:id", mahasiswaController.updateData);
router.delete("/:id", mahasiswaController.deleteData);

module.exports = router;
