const { response } = require("../../utils");
const {
  postUserController
} = require("../../controllers/UserController");

const postUserHandler = async (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    role
  } = req.body;


  const newUser = await postUserController(
    name,
    lastName,
    email,
    password,
    role
  );

  response(res, 201, newUser)
};


module.exports = {
  postUserHandler
};
