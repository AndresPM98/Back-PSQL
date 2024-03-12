const { response } = require("../../utils");
const {
  postUserController
} = require("../../controllers/UserController");

const postUserHandler = async (req, res) => {
  const {
    nombre, 
    mail, 
    contraseña, 
    rol
  } = req.body;


  const newUser = await postUserController(
    nombre, 
    mail, 
    contraseña, 
    rol
  );

  response(res, 201, newUser)
};


module.exports = {
  postUserHandler
};
