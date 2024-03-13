const { User } = require("../db.js");

const getAllUsersSortedController = async () => {
    try {
        // Consulta todos los usuarios y los ordena por su nombre en orden alfabético
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