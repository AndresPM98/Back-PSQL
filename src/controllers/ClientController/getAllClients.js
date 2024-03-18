const { Client } = require("../../db.js");

// Controlador para obtener todos los usuarios
const getAllClientsController = async () => {
    try {
        // Obtener todos los usuarios de la base de datos
        const allClients = await Client.findAll();

        // Obtener la cantidad total de usuarios
        const totalClients = await Client.count();

        return { clients: allClients, count: totalClients };
    } catch (error) {
        console.error("Error retrieving clients:", error);
        throw new Error("Error retrieving clients");
    }
};

module.exports = { getAllClientsController };