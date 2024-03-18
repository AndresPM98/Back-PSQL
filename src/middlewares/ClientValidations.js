const { ClientError } = require("../utils/errors");

// Función para validar la seguridad de la contraseña.
function validatePasswordStrength(password) {
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

// Middleware para validar los campos de un nuevo usuario.
module.exports = (req, res, next) => {
    const { name, lastName, email, password } = req.body;

    // Expresión regular para validar una dirección de correo electrónico.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar la existencia y el formato de los campos
    if (name && lastName && email && password) {
        if (!emailRegex.test(email)) {
            // Si el email no es válido, devolver un error de cliente
            return next(new ClientError("The 'email' field is not a valid email address", 400));
        }

        // Verificar seguridad de la contraseña
        if (!validatePasswordStrength(password)) {
            // Si la contraseña no es segura, devolver un error de cliente
            return next(new ClientError("The password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character", 400));
        }

        // Si todos los campos son válidos, pasar al siguiente middleware
        next();
    } else {
        // Si falta algún campo, devolver un error de cliente
        return next(new ClientError("Error in client data", 401));
    }
};
