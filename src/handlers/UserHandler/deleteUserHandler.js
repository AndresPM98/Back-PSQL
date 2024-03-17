const { response } = require("../../utils");
const { deleteUserController } = require("../../controllers/UserController");

// Manejador para la solicitud de eliminación de usuario
const deleteUserHandler = async (req, res) => {
    // Extraer el id del usuario de los parámetros de la solicitud
    const { id } = req.params;
    
    // Llamar a la función 'deleteUserController' para eliminar el usuario con el id proporcionado
    const result = await deleteUserController(id);

    // Verificar si no se obtuvo ningún resultado, lo que indica que el usuario no fue encontrado
    if (!result) {
        // Responder con un código de estado 400 (Bad Request) y un mensaje indicando que el usuario no fue encontrado
        response(res, 404, null, "User not found");
    } else {
        // Si se obtuvo un resultado, responder con un código de estado 200 (OK) y los datos del usuario eliminado
        response(res, 201, result);
    }
};

module.exports = {
    deleteUserHandler
};
