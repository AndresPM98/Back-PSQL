const { response } = require("../../utils");
const {
    getAllUsersSortedController
} = require("../../controllers/UserController");

const getAllUsersSortedHandler = async (req, res) => {
    try {
        // Llama al controlador para obtener todos los usuarios ordenados
        const allUsers = await getAllUsersSortedController();
        // Envía la respuesta con los usuarios ordenados
        response(res, 200, allUsers);
    } catch (error) {
        // Maneja cualquier error que ocurra y envía una respuesta de error
        response(res, 500, { message: "Internal Server Error" });
    }
};

module.exports = { getAllUsersSortedHandler };