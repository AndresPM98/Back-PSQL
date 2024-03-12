const { Router } = require("express");

const router = Router();

const userRouter = require("./UserRouter.js");

router.use("/user", userRouter);


module.exports = router;