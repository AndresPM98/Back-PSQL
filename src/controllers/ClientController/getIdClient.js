const { Client } = require("../../db.js");

// Controlador para obtener un usuario de la base de datos por su id
const getIdClientController = async (id) => {
    const clientID = await Client.findByPk(id);
    return clientID;
  };

module.exports={getIdClientController}