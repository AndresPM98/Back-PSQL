const { Client } = require('../../db.js');

// Controlador para obtener todos los usuarios ordenados por su nombre en orden alfabético
const getAllClientsSortedController = async () => {
    try {
        // Obtener todos los usuarios de la base de datos
        const allClients = await Client.findAll({
            order: [
                ['name', 'ASC'] // Ordenar por nombre en orden ascendente (alfabético)
            ]
        });
        return allClients;
    } catch (error) {
        // Manejo de errores si ocurre algún problema al consultar la base de datos
        console.error("Error retrieving clients:", error);
        throw new Error("Error retrieving clients");
    }
};

module.exports = { getAllClientsSortedController };