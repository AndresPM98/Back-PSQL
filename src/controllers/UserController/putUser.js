const { User } = require("../../db.js");

// Controlador para modificar el valor de una o varias propiedades de un usuario enviando todos sus datos
const putUserController = async (id, {
  name,
  lastName,
  email,
  password,
  role
}) => {

  // Buscar al usuario en la base de datos por su id
  const userUpdate = await User.findByPk(id);

  // Devuelve un error si no lo encuentra
  if (!userUpdate) {
    throw new Error("User not found");
  }

  // Actualizar los campos del usuario con los valores proporcionados en userUpdate
  await userUpdate.update({
    name,
    lastName,
    email,
    password,
    role
  });
  return userUpdate;
};

module.exports = { putUserController }