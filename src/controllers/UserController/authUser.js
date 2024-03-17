const { User } = require('../../db.js');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('../../middlewares/jwtoken.js');

// Controlador para autenticar al usuario
const authenticationUserController = async (email, password) => {
    try {
        // Convertir el email a minúsculas para evitar errores de capitalización
        const lowerCaseMail = email.toLowerCase();

        // Buscar al usuario en la base de datos por su email
        const userFound = await User.findOne({
            where: { email: lowerCaseMail }
        });

        // Si el usuario no se encuentra, devolver un mensaje de error
        if (!userFound) {
            return { status: 404, data: { message: "Email not found" } };
        }

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada del usuario
        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) {
            return { status: 401, data: { message: "Invalid password" } };
        }

        // Si la autenticación es exitosa, generar un token de acceso JWT
        const token = await createAccessToken({ id: userFound.id });

        // Obtener el rol y el estado del usuario para incluirlos en la respuesta
        const rol = userFound.rol;

        // Devolver un objeto con el token de acceso y rol del usuario
        return { status: 200, data: { token, rol } };
    } catch (error) {
        // Manejar cualquier error que ocurra durante el proceso de autenticación
        return { status: 500, data: { message: "Internal Server Error" } };
    }
}

module.exports = { authenticationUserController };
