const { User } = require("../../db.js");

const postUserController = async (
  name,
  lastName,
  email,
  password,
  role
) => {
  const newUser = await User.create({
    name,
  lastName,
  email,
  password,
  role
  });
  return newUser;
};

module.exports = { postUserController }