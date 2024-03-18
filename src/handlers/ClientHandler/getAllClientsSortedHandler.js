const { response } = require("../../utils");
const {
    getAllClientsSortedController
} = require("../../controllers/ClientController");

// Manejador para la solicitud de obtención de todos los usuarios ordenados por su nombre en orden alfabético
const getAllClientsSortedHandler = async (req, res) => {
    try {
        // Llama al controlador para obtener todos los usuarios ordenados
        const allClients = await getAllClientsSortedController();
        // Envía la respuesta con los usuarios ordenados
        response(res, 201, allClients);
    } catch (error) {
        // Maneja cualquier error que ocurra y envía una respuesta de error
        response(res, 500, { message: "Internal Server Error" });
    }
};

module.exports = { getAllClientsSortedHandler };