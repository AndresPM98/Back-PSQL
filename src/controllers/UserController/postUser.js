const { User } = require("../../db.js");

const postUserController = async (
  nombre, 
  mail, 
  contraseña, 
  rol
  ) => {
    const newUser = await User.create({
      nombre, 
      mail, 
      contraseña, 
      rol
    });
    return newUser  ;
  };

 module.exports={postUserController}