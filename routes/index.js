const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const transactionRouter = require("./transactionRouter");
const widgetRouter = require("./widgetRouter");
const categoryRouter = require("./categoryRouter");

router.use("/user", userRouter);
router.use("/transaction", transactionRouter);
router.use("/category", categoryRouter);
router.use("/widget", widgetRouter);


module.exports = router;
