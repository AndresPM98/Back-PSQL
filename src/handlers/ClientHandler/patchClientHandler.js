const { response } = require("../../utils");
const { patchClientController } = require("../../controllers/ClientController");

// Manejador para modificar los datos de un usuario
const patchClientHandler = async (req, res) => {
    // Extraer el ID del usuario de los parámetros de la solicitud
    const { id } = req.params;

    try {
        // Llamar al controlador para modificar los datos del usuario con el ID proporcionado y los datos de la solicitud
        const updatedClient = await patchClientController(id, req.body);
        
        // Responder con un código de estado 201 (OK) y los datos del usuario actualizados
        response(res, 201, updatedClient);
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    patchClientHandler
};
