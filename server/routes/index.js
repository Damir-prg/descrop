const Router                  = require('express');
const router                  = new Router();
const governanceRouter        = require("./governance.routes");
const departmentRouter        = require("./department.routes")
const autorizationRouter      = require("./authorization.routes")
const userRouter      = require("./user.routes")

// Прописываем пути которые будет слушать сервер во время постов
router.use("/governance", governanceRouter);
router.use("/department", departmentRouter);
router.use("/autorization", autorizationRouter);
router.use("/user", userRouter)

module.exports = router;