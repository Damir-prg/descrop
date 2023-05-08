const Router                = require('express');
const router                = new Router();
const CommandController     = require("../controllers/command.controller")

router.post("/", CommandController.create)
router.put("/one/", CommandController.getOne)
router.get("/", CommandController.getAll)
router.put("/update/", CommandController.update)

module.exports = router