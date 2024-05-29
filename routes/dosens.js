var express = require("express");
var router = express.Router();
var dosenController = require("../controllers/dosensController");

router.get("/", dosenController.getAll);
router.post("/", dosenController.createData);
router.get("/:id", dosenController.getDataById);
router.put("/:id", dosenController.updateData);
router.delete("/:id", dosenController.deleteData);

module.exports = router;
