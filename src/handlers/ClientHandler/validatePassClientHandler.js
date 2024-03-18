const { response } = require("../../utils");
const { validatePasswordController } = require("../../controllers/ClientController");

// Manejador para validar la contraseña de un usuario
const validatePassClientHandler = async (req, res) => {
    // Extraer el ID y la contraseña del cuerpo de la solicitud
    const { id, password } = req.body;

    try {
        // Llamar al controlador para validar la contraseña del usuario con el ID y la contraseña proporcionados
        const result = await validatePasswordController(id, password);

        // Enviar una respuesta con el código de estado y los datos proporcionados por el controlador
        res.status(result.status).json(result.data);
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
}

module.exports = { validatePassClientHandler };
