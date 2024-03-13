// Este módulo exporta una función que simplifica el envío de respuestas JSON en Express.
// Toma como argumentos el objeto de respuesta `res`, el código de estado HTTP `statusCode`,
// los datos de respuesta `responseData` y un mensaje de error opcional `errorMessage`.
// Si `errorMessage` está presente, envía una respuesta con un objeto JSON que indica un error
// con el mensaje de error proporcionado. De lo contrario, envía una respuesta con un objeto JSON
// que contiene los datos de respuesta proporcionados. Esto facilita el manejo de respuestas JSON
// en los controladores de ruta de Express.

module.exports = (res, statusCode, responseData, errorMessage) => {
    if (errorMessage) {
        // Si hay un mensaje de error, envía una respuesta con un objeto JSON de error.
        res.status(statusCode).json({
            error: true,
            message: errorMessage,
        });
    } else {
        // Si no hay mensaje de error, envía una respuesta con los datos de respuesta proporcionados.
        res.status(statusCode).json({
            data: responseData,
        });
    }
};