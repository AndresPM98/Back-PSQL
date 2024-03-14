const { response } = require("../../utils");
const { authenticationUserController } = require("../../controllers/UserController");

// Manejador para la autenticación de usuario
const authenticationUserHandler = async (req, res) => {
    // Obtener el email y la contraseña del cuerpo de la solicitud
    const { email, password } = req.body;
    
    try {
        // Llamar al controlador de autenticación de usuario para verificar las credenciales
        const result = await authenticationUserController(email, password);
        
        // Enviar una respuesta al cliente con el resultado de la autenticación
        response(res, result.status, result.data);
    } catch (error) {
        // Si ocurre un error interno del servidor, devolver un código de estado 500
        if (error.status === 500) {
            response(res, 500, { message: "Internal Server Error" });
        } else {
            // Para otros errores, devolver el código de estado recibido del controlador de autenticación
            response(res, error.status, error.data);
        }
    }
}

module.exports = { authenticationUserHandler };
