const { ClientError } = require("../utils/errors");

// Función para validar si una contraseña es segura.
function isPasswordSecure(password) {
    // Verificar longitud mínima
    if (password.length < 8) {
        return false;
    }

    // Verificar al menos una letra minúscula y una mayúscula.
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        return false;
    }

    // Verificar al menos un número.
    if (!/\d/.test(password)) {
        return false;
    }

    // Verificar al menos un carácter especial.
    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password)) {
        return false;
    }

    return true;
}

module.exports = (req, res, next) => {
    const {
        name,
        lastName,
        email,
        password
    } = req.body;

    // Expresión regular para validar una dirección de correo electrónico.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && lastName && email && password) {
        if (!emailRegex.test(email)) {
            throw new ClientError("The 'email' field is not a valid email address", 400);
        }

        // Verificar seguridad de la contraseña
        if (!isPasswordSecure(password)) {
            throw new ClientError("The password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character", 400);
        }
    } else {
        throw new ClientError("Error in client data", 401);
    }
};
