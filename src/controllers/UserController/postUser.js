const { User } = require('../../db.js');
const bcrypt = require('bcrypt');

// Controlador para crear un usuario
const postUserController = async (
  name,
  lastName,
  email,
  password,
  role
) => {
  try {
    // Verificar si el email ya existe en la base de datos
    const existingUser = await User.findOne({ where: { email: email.toLowerCase() } });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    // Si el email no existe, continuar con la creación del nuevo usuario
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      lastName,
      email: email.toLowerCase(),
      password: hashedPassword,
      role
    });

    return newUser;
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso de creación del usuario
    throw new Error(error.message);
  }
};

module.exports = { postUserController };