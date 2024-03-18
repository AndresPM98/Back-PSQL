const { Client } = require("../../db.js");

// Controlador para modificar el valor de una o varias propiedades de un usuario enviando todos sus datos
const putClientController = async (id, {
  name,
  lastName,
  email,
  password
}) => {

  // Buscar al usuario en la base de datos por su id
  const clientUpdate = await Client.findByPk(id);

  // Devuelve un error si no lo encuentra
  if (!clientUpdate) {
    throw new Error("Client not found");
  }

  // Actualizar los campos del usuario con los valores proporcionados en clientUpdate
  await clientUpdate.update({
    name,
    lastName,
    email,
    password
  });
  return clientUpdate;
};

module.exports = { putClientController }