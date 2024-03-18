const { Client } = require("../../db.js");
const bcrypt = require("bcrypt");

// Controlador para modificar el valor de una o varias propiedades de un usuario enviando un objeto con las propiedades a modificar
const patchClientController = async (id, updatedFields) => {
    try {
        // Buscar al usuario en la base de datos por su id
        const clientUpdate = await Client.findByPk(id);

        // Devuelve un error si no lo encuentra
        if (!clientUpdate) {
            throw new Error("Client not found");
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
        await clientUpdate.update(updatedFields);

        // Devolver el usuario actualizado
        return clientUpdate;
    } catch (error) {
        // Capturar cualquier error y mostrarlo en la consola
        console.error("Error updating client:", error);
        // Relanzar el error para que pueda ser manejado en niveles superiores
        throw error;
    }
};

module.exports = { patchClientController };

