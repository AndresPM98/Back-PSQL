const { response } = require("../../utils");
const { getIdClientController } = require("../../controllers/ClientController");


// Manejador para obtener los detalles de un usuario por su ID
const getIDClientHandler = async (req, res) => {
    // Extraer el ID del usuario de los parámetros de la solicitud
    const { id } = req.params;

    try {
        // Llamar al controlador para obtener los detalles del usuario con el ID proporcionado
        const client = await getIdClientController(id);

        // Verificar si el usuario no fue encontrado
        if (!client) {
            // Responder con un código de estado 400 (Bad Request) y un mensaje indicando que el usuario no fue encontrado
            return response(res, 404, null, "Client not found");
        }

        // Si se encuentra el usuario, responder con un código de estado 201 (OK) y los detalles del usuario
        response(res, 201, client);
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    getIDClientHandler
};
