const { postUserController } = require("./postUser");
const { deleteUserController } = require("./deleteUser");
const { getIdUserController } = require("./getIdUser");
const { getAllUsersController } = require("./getAllUsers");
const { getAllUsersSortedController } = require("./getAllUsersSorted");
const { putUserController } = require("./putUser");
const { patchUserController } = require("./patchUser");
const { authenticationUserController } = require("./authUser");
const { validatePasswordController } = require("./validatePassword");

module.exports = { 
    postUserController, 
    deleteUserController, 
    getIdUserController, 
    getAllUsersController, 
    getAllUsersSortedController,
    putUserController,
    patchUserController, 
    authenticationUserController, 
    validatePasswordController 
}