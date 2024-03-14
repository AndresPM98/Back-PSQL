const { Router } = require("express");
const handlers = require("../handlers/UserHandler");
const middlewares = require("../middlewares")
const UserRouter = Router();

UserRouter.get("/", handlers.getAllUsersHandler);
UserRouter.get("/sorted", handlers.getAllUsersSortedHandler);
UserRouter.get("/:id", handlers.getIDUserHandler);
UserRouter.delete("/:id", handlers.deleteUserHandler);
UserRouter.post("/", middlewares.UserValidations,handlers.postUserHandler);
UserRouter.put("/:id", handlers.putUserHandler);
UserRouter.patch("/:id", handlers.patchUserHandler);
UserRouter.post("/authenticate", handlers.authenticationUserHandler); 
UserRouter.post("/validate-password", handlers.validatePasswordHandler); 

module.exports = UserRouter;
