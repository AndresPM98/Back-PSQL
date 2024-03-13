const { User } = require("../../db.js");

const putUserController = async (id, {
  name,
  lastName,
  email,
  password,
  role
}) => {
  const userUpdate = await User.findByPk(id);
  if (!userUpdate) {
    throw new Error("User not found");
  }
  await userUpdate.update({
    name,
    lastName,
    email,
    password,
    role
  });
  return userUpdate;
};

module.exports = { putUserController }