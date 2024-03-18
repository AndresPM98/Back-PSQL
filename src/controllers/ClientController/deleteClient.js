const { Client } = require("../../db.js");

// Controlador para eliminar permanentemente un usuario
const deleteClientController = async (id) => {

  // Buscar al usuario en la base de datos por su id
  const clientDelete = await Client.findByPk(id);

  // Si el usuario no se encuentra, devolver un mensaje de error
  if (!clientDelete) {
    return null;
  }
  
  // Copiar la información del usuario a eliminar antes de la eliminación
  const deletedClient = { ...clientDelete.toJSON()}; 

  // Eliminar el usuario de la base de datos
  await clientDelete.destroy(); 

  // Crear un mensaje indicando que el usuario ha sido eliminado
  const message = `Client deleted: ${deletedClient.name}`; 

  // Devolver el mensaje de eliminación junto con la información del usuario eliminado
  return { message, deletedClient }; 
};


module.exports = {
  deleteClientController
};
