const Router                = require('express');
const router                = new Router();
const Department            = require("../controllers/department.controller")

router.post("/", Department.create)
router.get("/", Department.getAll)

module.exports = router
