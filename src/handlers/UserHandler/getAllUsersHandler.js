const { getAllUsersController } = require("../../controllers/UserController");
const { response } = require("../../utils");

// Manejador para la solicitud de obtención de todos los usuarios
const getAllUsersHandler = async (req, res) => {
    try {
        // Llamar al controlador para obtener todos los usuarios y su cantidad
        const usersData = await getAllUsersController();

        // Extraer los usuarios y su cantidad del resultado
        const { users, count } = usersData;

        // Verificar si no se encontraron usuarios registrados
        if (users.length === 0) {
            // Si no se encontraron usuarios, responder con un código de estado 400 (Bad Request) y un mensaje indicando la situación
            response(res, 404, null, "No registered users");
        } else {
            // Si se encontraron usuarios, responder con un código de estado 200 (OK), la cantidad de usuarios y la lista de usuarios
            response(res, 201, { count, users });
        }
    } catch (error) {
        // Para otros errores, responder con un código de estado 500 (Internal Server Error)
        response(res, 500, null, "Internal Server Error");
    }
};

module.exports = {
    getAllUsersHandler
};