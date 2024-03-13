// Importación del módulo 'jsonwebtoken' para la generación de tokens JWT.
const jwt = require('jsonwebtoken');
// Importación de la clave secreta JWT desde el archivo de configuración.
const TOKEN_SECRET = require('../config.js').jwtSecret;

// Función para crear un token de acceso JWT
const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        // Generar el token JWT con el payload proporcionado y la clave secreta.
        jwt.sign(
            payload,                // Datos a incluir en el token (payload).
            TOKEN_SECRET,           // Clave secreta para firmar el token.
            {
                expiresIn: '1d',    // Expiración del token (1 día). Si no quiero que expire coloco "null".
            },
            (err, token) => {
                if (err) reject(err);   // Si hay un error, rechazar la promesa con el error.
                resolve(token);         // Si no hay errores, resolver la promesa con el token generado.
            }
        );
    });
};

module.exports = {
    createAccessToken
};
