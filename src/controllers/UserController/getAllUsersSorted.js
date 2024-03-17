const { User } = require('../../db.js');

// Controlador para obtener todos los usuarios ordenados por su nombre en orden alfabético
const getAllUsersSortedController = async () => {
    try {
        // Obtener todos los usuarios de la base de datos
        const allUsers = await User.findAll({
            order: [
                ['name', 'ASC'] // Ordenar por nombre en orden ascendente (alfabético)
            ]
        });
        return allUsers;
    } catch (error) {
        // Manejo de errores si ocurre algún problema al consultar la base de datos
        console.error("Error retrieving users:", error);
        throw new Error("Error retrieving users");
    }
};

module.exports = { getAllUsersSortedController };