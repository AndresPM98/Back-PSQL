const { User } = require("../../db.js");
const bcrypt = require("bcrypt");

// Controlador para modificar el valor de una o varias propiedades de un usuario enviando un objeto con las propiedades a modificar
const patchUserController = async (id, updatedFields) => {
    try {
        // Buscar al usuario en la base de datos por su id
        const userUpdate = await User.findByPk(id);

        // Devuelve un error si no lo encuentra
        if (!userUpdate) {
            throw new Error("User not found");
        }

        // Si el campo "contrasena" está presente en updatedFields, realiza el hasheo
        if (updatedFields.password) {
            const hashedPassword = await bcrypt.hash(updatedFields.password, 10);
            updatedFields.password = hashedPassword;
        }

        // Si el campo "mail" está presente en updatedFields, se convierte a minúsculas
        if (updatedFields.mail) {
            updatedFields.mail = updatedFields.mail.toLowerCase();
        }

        // Actualizar los campos del usuario con los valores proporcionados en updatedFields
        await userUpdate.update(updatedFields);

        // Devolver el usuario actualizado
        return userUpdate;
    } catch (error) {
        // Capturar cualquier error y mostrarlo en la consola
        console.error("Error updating user:", error);
        // Relanzar el error para que pueda ser manejado en niveles superiores
        throw error;
    }
};

module.exports = { patchUserController };

