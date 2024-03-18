const { postUserHandler } = require("./postUserHandler");
const { putUserHandler } = require("./putUserHandler");
const { patchUserHandler } = require("./patchUserHandler");
const { getAllUsersHandler } = require("./getAllUsersHandler");
const { getIDUserHandler } = require("./getIDUserHandler");
const { getAllUsersSortedHandler } = require("./getAllUsersSortedHandler");
const { deleteUserHandler } = require("./deleteUserHandler");
const { authenticationUserHandler } = require("./authUserHandler");
const { validatePasswordHandler } = require("./validatePasswordHandler");

module.exports = { 
    postUserHandler,
    putUserHandler, 
    patchUserHandler,
    getAllUsersHandler, 
    getIDUserHandler,
    getAllUsersSortedHandler, 
    deleteUserHandler, 
    authenticationUserHandler, 
    validatePasswordHandler 
}