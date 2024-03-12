// Los utils son funciones especificas que no necesariamente tienen relacion estricta con el codigo, 
// podrían ser utilizadas en otros codigos sin problema.

module.exports = (res, statusCode, responseData, errorMessage) => {
    if (errorMessage) {
        res.status(statusCode).json({
            error: true,
            message: errorMessage,
        });
    } else {
        res.status(statusCode).json({
            error: false,
            data: responseData,
        });
    }
};
