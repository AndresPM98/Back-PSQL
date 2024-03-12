const { postUserController }= require ("./postUser") ; 
const { deleteUserController } = require ("./deleteUser");
const { getIdUserController } = require ("./getIdUser");
const { getUserController } = require ("./getUser");
const { putUserController } = require ("./putUser");

module.exports= {postUserController, deleteUserController, getIdUserController, getUserController, putUserController}