const { User } = require('../../db.js');
const bcrypt = require('bcrypt');
const { response } = require("../../utils/index.js");
const { createAccessToken } = require('../../middlewares/jwtoken.js');


const authenticationUserController = async (email, password) => {
    try {
        const lowerCaseMail = email.toLowerCase();

        const userFound = await User.findOne({
            where: { email: lowerCaseMail }
        });
        if (!userFound) return { status: 400, data: { message: "User not found" } };

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return { status: 400, data: { message: "Invalid credential" } };

        const token = await createAccessToken({ id: userFound.id })
        const rol = userFound.rol
        const estado = userFound.estado

        return { status: 201, data: { token, rol, estado } };
    } catch (error) {
        return { status: 400, data: error };
    }
}


module.exports = { authenticationUserController }