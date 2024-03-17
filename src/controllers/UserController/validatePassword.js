const { User } = require('../../db.js');
const bcrypt = require('bcrypt');


// Controlador para validar la contraseña de un usuario
const validatePasswordController = async (id, password) => {
    try {
        // Buscar al usuario en la base de datos por su id
        const userFound = await User.findOne({
            where: { id: id }
        });

        // Si el usuario no se encuentra, devolver un mensaje de error
        if (!userFound) return { status: 400, data: { message: "User not found" } };

        // Comparar la contraseña proporcionada con la contraseña almacenada del usuario
        const isMatch = await bcrypt.compare(password, userFound.password)

        // Si las contraseñas no coinciden, devolver un mensaje de error
        if (!isMatch) return { status: 400, data: { message: "Invalid credentials" } };

        // Si la validación es exitosa, devolver un mensaje de éxito
        return { status: 200, data: { message: "Successful validation" } };
    } catch (error) {
        // Capturar cualquier error y devolver un mensaje de error con el detalle
        return { status: 400, data: error };
    }
}


module.exports = { validatePasswordController }