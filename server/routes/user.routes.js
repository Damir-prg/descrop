const Router                = require('express');
const router                = new Router();
const User          = require("../controllers/user.controller.js")

router.get("/", User.getAll)
router.put("/one/", User.getOne)
router.post("/", User.create)
router.put("/", User.login)

module.exports = router