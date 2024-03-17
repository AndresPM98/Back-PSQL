const { response } = require("../../utils");
const { getIdUserController } = require("../../controllers/UserController");


// Manejador para obtener los detalles de un usuario por su ID
const getIDUserHandler = async (req, res) => {
    // Extraer el ID del usuario de los parámetros de la solicitud
    const { id } = req.params;

    try {
        // Llamar al controlador para obtener los detalles del usuario con el ID proporcionado
        const user = await getIdUserController(id);

        // Verificar si el usuario no fue encontrado
        if (!user) {
            // Responder con un código de estado 400 (Bad Request) y un mensaje indicando que el usuario no fue encontrado
            return response(res, 404, null, "User not found");
        }

        // Si se encuentra el usuario, responder con un código de estado 201 (OK) y los detalles del usuario
        response(res, 201, user);
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    getIDUserHandler
};
