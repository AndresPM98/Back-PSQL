const { Client } = require("../../db.js");

// Controlador para obtener todos los usuarios paginados y en ordenados por su nombre en orden alfabético
const getAllClientsPageController = async (page, limit) => {
    try {
        // Calcular el desplazamiento basado en el número de página y el límite.
        const offset = page * limit;

         // Obtiene los clientes de la base de datos, paginados y ordenados por nombre en orden ascendente.
        const clients = await Client.findAndCountAll({
            offset,
            limit,
            order: [['name', 'ASC']], // Ordenar por nombre en orden ascendente (alfabético)
        });

        // Calcular el número total de páginas en función del recuento total y el límite.
        const totalPages = Math.ceil(clients.count / limit);

         // Devolver un objeto que contiene los clientes para la página solicitada y el número total de páginas.
        return {
            clients: clients.rows,
            totalPages: totalPages
        };
    } catch (error) {
        console.error('Error retrieving clients:', error);
        throw error; 
    }
}

module.exports = { getAllClientsPageController };