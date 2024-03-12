const { User } = require("../../db.js");

const getUserController = async () => {
    const allUsers = await User.findAll();
    return allUsers;
  };

  module.exports={getUserController}