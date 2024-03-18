const { Router } = require("express");

const router = Router();

const userRouter = require("./UserRouter.js");
const clientRouter = require("./ClientRouter.js");

router.use("/user", userRouter);
router.use("/client", clientRouter);


module.exports = router;