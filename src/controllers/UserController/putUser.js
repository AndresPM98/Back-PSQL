const { User } = require("../../db.js");

const putUserController = async (id, {  
  nombre, 
  mail, 
  contraseña, 
  rol
}) => {
    const userUpdate = await User.findByPk(id);
    if (!userUpdate) {
      throw new Error("User not found");
    }
    await userUpdate.update({
      nombre, 
      mail, 
      contraseña, 
      rol
    });
    return userUpdate;
  };

  module.exports={putUserController}