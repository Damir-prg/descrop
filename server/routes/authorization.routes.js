const Router                = require('express');
const router                = new Router();
const Autorization          = require("../controllers/authorization.controller")

router.get("/", Autorization.getData)

module.exports = router