const { response } = require("../../utils");
const { postUserController } = require("../../controllers/UserController");

const postUserHandler = async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      password,
      role
    } = req.body;

    // Llamar al controlador para crear un nuevo usuario
    const newUser = await postUserController(
      name,
      lastName,
      email,
      password,
      role
    );

    // Enviar una respuesta con el nuevo usuario creado
    response(res, 201, newUser);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la creación del usuario
    if (error.message === "Email already exists") {
      response(res, 400, null, "Email already exists");
    } else {
      response(res, 500, null, "Internal Server Error");
    }
  }
};

module.exports = {
  postUserHandler
};
