const { postUserController } = require("./postUser");
const { deleteUserController } = require("./deleteUser");
const { getIdUserController } = require("./getIdUser");
const { getUserController } = require("./getUser");
const { putUserController } = require("./putUser");
const { patchUserController } = require("./patchUser");
const { authenticationUserController } = require("./authUser");
const { validatePasswordController } = require("./validatePassword");

module.exports = { 
    postUserController, 
    deleteUserController, 
    getIdUserController, 
    getUserController, 
    putUserController,
    patchUserController, 
    authenticationUserController, 
    validatePasswordController 
}