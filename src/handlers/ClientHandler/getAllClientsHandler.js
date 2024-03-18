const { getAllClientsController } = require("../../controllers/ClientController");
const { response } = require("../../utils");

// Manejador para la solicitud de obtención de todos los usuarios
const getAllClientsHandler = async (req, res) => {
    try {
        // Llamar al controlador para obtener todos los usuarios y su cantidad
        const clientsData = await getAllClientsController();

        // Extraer los usuarios y su cantidad del resultado
        const { clients, count } = clientsData;

        // Verificar si no se encontraron usuarios registrados
        if (clients.length === 0) {
            // Si no se encontraron usuarios, responder con un código de estado 400 (Bad Request) y un mensaje indicando la situación
            response(res, 404, null, "No registered clients");
        } else {
            // Si se encontraron usuarios, responder con un código de estado 200 (OK), la cantidad de usuarios y la lista de usuarios
            response(res, 201, { count, clients });
        }
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    getAllClientsHandler
};