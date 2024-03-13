// Esta clase define un error personalizado llamado ClientError, que hereda de la clase Error de JavaScript.
// Permite crear instancias de errores con un mensaje personalizado y un código de estado HTTP asociado.

class ClientError extends Error {
    constructor(message, statusCode = 400) {
        // Llama al constructor de la clase base (Error) con el mensaje proporcionado.
        super(message);
        // Asigna el código de estado HTTP proporcionado a la propiedad statusCode de la instancia de error.
        // Si no recibe un valor de statusCode le asigna automaticamente el 400 o el que se defina en params.
        this.statusCode = statusCode;
    }
}

// Exporta la clase ClientError para que esté disponible en otros módulos.
module.exports = { ClientError };