const { postUserHandler } = require("./postUserHandler");
const { putUserHandler } = require("./putUserHandler");
const { patchUserHandler } = require("./patchUserHandler");
const { getUserHandler } = require("./getUserHandler")
const { getIDUserHandler } = require("./getIDUserHandler")
const { deleteUserHandler } = require("./deleteUserHandler")
const { authenticationUserHandler } = require("./authUserHandler")
const { validatePasswordHandler } = require("./validatePasswordHandler")

module.exports = { 
    postUserHandler,
    putUserHandler, 
    patchUserHandler,
    getUserHandler, 
    getIDUserHandler, 
    deleteUserHandler, 
    authenticationUserHandler, 
    validatePasswordHandler 
}