const Router                = require('express');
const router                = new Router();
const Governance            = require("../controllers/governance.controller")

router.post("/", Governance.create)
router.get("/", Governance.getAll)
router.put("/update/", Governance.update)

module.exports = router