const { getAllClientsPageController } = require("../../controllers/ClientController");
const { response } = require("../../utils");

// Manejador para la solicitud de obtención de todos los clientes paginados
const getAllClientsPageHandler = async (req, res) => {
    try {
        // Extraer el número de página y el límite de la solicitud de consulta.
        const { page , limit } = req.query;

        // Verificar si los parámetros de la consulta están presentes y son números válidos.
        if (!page || !limit || isNaN(page) || isNaN(limit)) {
            return res.status(400).json({ error: 'Invalid page or limit parameters' });
        }

        // Convertir los valores de página y límite a números enteros.
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        // Llamar al controlador para obtener clientes paginados.
        const clients = await getAllClientsPageController(pageNumber, limitNumber);


        if (clients.length === 0) {
            response(res, 404, null, "No registered clients");
        }

        res.status(201).json(clients);
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    getAllClientsPageHandler
};