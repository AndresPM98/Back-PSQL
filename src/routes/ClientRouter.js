const { Router } = require("express");
const handlers = require("../handlers/ClientHandler");
const middlewares = require("../middlewares")

const ClientRouter = Router();

ClientRouter.get("/", handlers.getAllClientsHandler);
ClientRouter.get("/sorted", handlers.getAllClientsSortedHandler);
ClientRouter.get("/:id", handlers.getIDClientHandler);
ClientRouter.delete("/:id", handlers.deleteClientHandler);
ClientRouter.post("/",middlewares.ClientValidations, handlers.postClientHandler);
ClientRouter.put("/:id", handlers.putClientHandler);
ClientRouter.patch("/:id", handlers.patchClientHandler);
ClientRouter.post("/authenticate", handlers.authenticationClientHandler); 
ClientRouter.post("/validate-password", handlers.validatePassClientHandler); 

module.exports = ClientRouter;