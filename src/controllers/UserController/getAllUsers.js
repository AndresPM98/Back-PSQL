const { User } = require("../../db.js");

const getAllUsersController = async () => {
    try {
        // Obtener todos los usuarios
        const allUsers = await User.findAll();

        // Obtener la cantidad total de usuarios
        const totalUsers = await User.count();

        return { users: allUsers, count: totalUsers };
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw new Error("Error retrieving users");
    }
};

module.exports = { getAllUsersController };