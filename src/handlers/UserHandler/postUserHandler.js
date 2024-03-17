const { response } = require("../../utils");
const { postUserController } = require("../../controllers/UserController");

// Manejador para crear un nuevo usuario
const postUserHandler = async (req, res) => {
  try {
    // Extraer los datos del cuerpo de la solicitud
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

    // Enviar una respuesta con el nuevo usuario creado y un código de estado 201 (Created)
    response(res, 201, newUser);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la creación del usuario
    if (error.message === "Email already exists") {
      // Si el error es debido a que el correo electrónico ya existe, responder con un código de estado 409 (Conflict)
      response(res, 409, null, "Email already exists");
    } else {
      // Para otros errores, responder con un código de estado 500 (Internal Server Error)
      response(res, 500, null, "Internal Server Error");
    }
  }
};

module.exports = {
  postUserHandler
};
