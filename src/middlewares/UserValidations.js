const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const {   
        nombre, 
        mail, 
        contraseña, 
        rol
    } = req.body;

    // Expresión regular para validar una dirección de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre && mail && contraseña && rol) {
        if (!emailRegex.test(mail)) {
            throw new ClientError("El campo 'mail' no es una dirección de correo electrónico válida", 400);
        }
        if (rol === "Admin" || rol === "SuperAdmin") {
            next(); 
        } else {
            throw new ClientError("El campo 'rol' debe ser 'Admin' o 'SuperAdmin'", 400);
        }
    } else {
        throw new ClientError("Error en los datos del usuario", 401);
    }
};
