const { User } = require("../../db.js");

// Controlador para obtener un usuario de la base de datos por su id
const getIdUserController = async (id) => {
    const userID = await User.findByPk(id);
    return userID;
  };

module.exports={getIdUserController}