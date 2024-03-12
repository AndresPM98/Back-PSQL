const { postUserHandler } = require("./postUserHandler");
const { putUserHandler } = require("./putUserHandler");
const { getUserHandler } = require("./getUserHandler")
const { getIDUserHandler } = require("./getIDUserHandler")
const { deleteUserHandler } = require("./deleteUserHandler")

module.exports = { postUserHandler, putUserHandler, getUserHandler, getIDUserHandler, deleteUserHandler }