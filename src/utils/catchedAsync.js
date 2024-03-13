// Este módulo exporta una función de envoltura de middleware asincrónico.
// Toma una función asíncrona `fn` como argumento y devuelve otra función middleware.
// La función middleware devuelta ejecuta `fn(req, res)` y atrapa cualquier error que pueda ocurrir.
// Si hay un error, lo pasa al siguiente middleware o controlador de errores utilizando `next(err)`.
module.exports = (fn) => {
    return function (req, res, next) {
        fn(req, res).catch((err) => {
            next(err)
        })
    }
}