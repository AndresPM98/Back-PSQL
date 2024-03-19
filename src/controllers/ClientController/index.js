const { postClientController } = require("./postClient");
const { deleteClientController } = require("./deleteClient");
const { getIdClientController } = require("./getIdClient");
const { getAllClientsController } = require("./getAllClients");
const { getAllClientsSortedController } = require("./getAllClientsSorted");
const { getAllClientsPageController } = require("./getAllClientsPage");
const { putClientController } = require("./putClient");
const { patchClientController } = require("./patchClient");
const { authenticationClientController } = require("./authClient");
const { validatePasswordClientController } = require("./validatePasswordClient");

module.exports = { 
    postClientController, 
    deleteClientController, 
    getIdClientController, 
    getAllClientsController, 
    getAllClientsSortedController,
    getAllClientsPageController,
    putClientController,
    patchClientController, 
    authenticationClientController, 
    validatePasswordClientController 
}