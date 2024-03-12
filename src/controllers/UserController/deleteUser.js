const { User } = require("../../db.js");
const { response } = require("../../utils");

const deleteUserController = async (id) => {
  const userDelete = await User.findByPk(id);
  if (!userDelete) {
      return null; // No se encontró el Usere
  }
  const deletedUser = { ...userDelete.toJSON()}; 

  await userDelete.destroy(); 

  const message = `Se eliminó el usuario: ${deletedUser.nombre}`; 
  return { message, deletedUser }; 
};

module.exports = {
  deleteUserController
};