const { User } = require("../../db.js");
const bcrypt = require("bcrypt");

const patchUserController = async (id, updatedFields) => {
    try {
        const userUpdate = await User.findByPk(id);
        if (!userUpdate) {
            throw new Error("User not found");
        }

        // Si el campo "contrasena" está presente en updatedFields, realiza el hash
        if (updatedFields.password) {
            const hashedPassword = await bcrypt.hash(updatedFields.password, 10);
            updatedFields.password = hashedPassword;
        }

        // Si el campo "mail" está presente en updatedFields, se convierte a minúsculas
        if (updatedFields.mail) {
            updatedFields.mail = updatedFields.mail.toLowerCase();
        }

        await userUpdate.update(updatedFields);

        return userUpdate;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

module.exports = { patchUserController };

