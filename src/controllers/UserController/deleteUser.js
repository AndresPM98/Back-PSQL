const { User } = require("../../db.js");

const deleteUserController = async (id) => {
  const userDelete = await User.findByPk(id);
  if (!userDelete) {
      return null; // User not found
  }
  const deletedUser = { ...userDelete.toJSON()}; 

  await userDelete.destroy(); 

  const message = `User deleted: ${deletedUser.name}`; 
  return { message, deletedUser }; 
};

module.exports = {
  deleteUserController
};
