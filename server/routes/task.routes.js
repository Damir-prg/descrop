const Router = require("express");
const router = new Router();
const TaskController = require("../controllers/task.controller");

router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.put("/", TaskController.getOne);
router.put("/user/", TaskController.getByUserId);

module.exports = router;
