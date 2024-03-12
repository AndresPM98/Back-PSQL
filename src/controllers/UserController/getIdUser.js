const { User } = require("../../db.js");

const getIdUserController = async (id) => {
    const userID = await User.findByPk(id);
    return userID;
  };

module.exports={getIdUserController}