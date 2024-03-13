const { User } = require('../../db.js');
const bcrypt = require('bcrypt');

const validatePasswordController = async (id, password) => {
    try {
        const userFound = await User.findOne({
            where: { id: id }
        });
        if (!userFound) return { status: 400, data: { message: "User not found" } };

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return { status: 400, data: { message: "Invalid credentials" } };

        return { status: 200, data: { message: "Successful validation" } };
    } catch (error) {
        return { status: 400, data: error };
    }
}


module.exports = { validatePasswordController }