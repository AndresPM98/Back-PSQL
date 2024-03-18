const { postClientHandler } = require("./postClientHandler");
const { putClientHandler } = require("./putClientHandler");
const { patchClientHandler } = require("./patchClientHandler");
const { getAllClientsHandler } = require("./getAllClientsHandler");
const { getIDClientHandler } = require("./getIDClientHandler");
const { getAllClientsSortedHandler } = require("./getAllClientsSortedHandler");
const { deleteClientHandler } = require("./deleteClientHandler");
const { authenticationClientHandler } = require("./authClientHandler");
const { validatePassClientHandler } = require("./validatePassClientHandler");

module.exports = { 
    postClientHandler,
    putClientHandler, 
    patchClientHandler,
    getAllClientsHandler, 
    getIDClientHandler,
    getAllClientsSortedHandler, 
    deleteClientHandler, 
    authenticationClientHandler, 
    validatePassClientHandler 
}