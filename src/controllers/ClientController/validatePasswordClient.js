const { Client } = require('../../db.js');
const bcrypt = require('bcrypt');


// Controlador para validar la contraseña de un usuario
const validatePasswordClientController = async (id, password) => {
    try {
        // Buscar al usuario en la base de datos por su id
        const clientFound = await Client.findOne({
            where: { id: id }
        });

        // Si el usuario no se encuentra, devolver un mensaje de error
        if (!clientFound) return { status: 400, data: { message: "Client not found" } };

        // Comparar la contraseña proporcionada con la contraseña almacenada del usuario
        const isMatch = await bcrypt.compare(password, clientFound.password)

        // Si las contraseñas no coinciden, devolver un mensaje de error
        if (!isMatch) return { status: 400, data: { message: "Invalid credentials" } };

        // Si la validación es exitosa, devolver un mensaje de éxito
        return { status: 200, data: { message: "Successful validation" } };
    } catch (error) {
        // Capturar cualquier error y devolver un mensaje de error con el detalle
        return { status: 400, data: error };
    }
}


module.exports = { validatePasswordClientController }