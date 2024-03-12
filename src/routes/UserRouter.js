const { Router } = require("express");
const handlers = require("../handlers/UserHandler");
const middlewares = require("../middlewares")
const UserRouter = Router();

UserRouter.get("/", handlers.getUserHandler);
UserRouter.get("/:id", handlers.getIDUserHandler);
UserRouter.delete("/:id", handlers.deleteUserHandler);
UserRouter.post("/", middlewares.UserValidations,handlers.postUserHandler);
UserRouter.put("/:id", handlers.putUserHandler);

module.exports = UserRouter;
