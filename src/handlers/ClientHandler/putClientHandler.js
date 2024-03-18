const { response } = require("../../utils");
const { putClientController } = require("../../controllers/ClientController");

// Manejador para actualizar la información de un usuario
const putClientHandler = async (req, res) => {
    // Extraer el ID del usuario de los parámetros de la solicitud
    const { id } = req.params;

    try {
        // Llamar al controlador para actualizar la información del usuario con los datos proporcionados
        await putClientController(id, req.body);

        // Crear un mensaje indicando que la información del usuario ha sido actualizada
        const message = "Client information updated";

        // Responder con un código de estado 201 (OK) y el mensaje junto con la información actualizada del usuario
        response(res, 201, { message, updatedClient: req.body });
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    putClientHandler
};