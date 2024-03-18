const { Client } = require('../../db.js');
const bcrypt = require('bcrypt');

// Controlador para crear un usuario
const postClientController = async (
  name,
  lastName,
  email,
  password,
  user_Id
) => {
  try {
    // Verificar si el email ya existe en la base de datos
    const existingClient = await Client.findOne({ where: { email: email.toLowerCase() } });
    if (existingClient) {
      throw new Error("Email already exists");
    }

    // Si el email no existe, continuar con la creación del nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);

    const newClient = await Client.create({
      name,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
      user_Id
    });

    return newClient;
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso de creación del usuario
    throw new Error(error.message);
  }
};

module.exports = { postClientController };