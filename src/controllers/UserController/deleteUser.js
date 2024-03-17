const { User } = require("../../db.js");

// Controlador para eliminar permanentemente un usuario
const deleteUserController = async (id) => {

  // Buscar al usuario en la base de datos por su id
  const userDelete = await User.findByPk(id);

  // Si el usuario no se encuentra, devolver un mensaje de error
  if (!userDelete) {
    return null;
  }
  
  // Copiar la información del usuario a eliminar antes de la eliminación
  const deletedUser = { ...userDelete.toJSON()}; 

  // Eliminar el usuario de la base de datos
  await userDelete.destroy(); 

  // Crear un mensaje indicando que el usuario ha sido eliminado
  const message = `User deleted: ${deletedUser.name}`; 

  // Devolver el mensaje de eliminación junto con la información del usuario eliminado
  return { message, deletedUser }; 
};


module.exports = {
  deleteUserController
};
