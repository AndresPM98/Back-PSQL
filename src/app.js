// Importamos framework que simplifica la creación de aplicaciones web y APIs.
const express = require('express'); 
// Importamos cookie-parser, que analiza las cookies adjuntas en las solicitudes HTTP y las convierte en un objeto JS.
const cookieParser = require('cookie-parser');
// "bodyParser" analiza el cuerpo de las solicitudes HTTP. 
const bodyParser = require('body-parser');
// Importmaos morgan que es un registro de solicitudes HTTP para Node.js.
const morgan = require('morgan');
//Importamos el archivo de rutas principal.
const routes = require('./routes/index.js');

require('./db.js'); // Importamos la configuración de la base de datos.

const server = express(); // Crea una instancia de la aplicación Express.

server.name = 'API'; // Establece el nombre de la aplicación.

// Analiza las solicitudes con tipo de contenido application/x-www-form-urlencoded.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 
// Analiza las solicitudes con tipo de contenido application/json.
server.use(bodyParser.json({ limit: '50mb' }));
// Utiliza el middleware cookie-parser para analizar las cookies de las solicitudes.
server.use(cookieParser());
// Utiliza el middleware morgan para registrar las solicitudes en la consola en formato "dev".
server.use(morgan('dev'));
// stablece encabezados CORS para permitir las solicitudes desde cualquier origen y con cualquier método HTTP.
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept');
  next();
});

// Monta las rutas definidas en el archivo index.js en la raíz de la aplicación.
server.use('/', routes);

//Captura cualquier solicitud que no coincida con ninguna ruta definida y responde con un mensaje de "no encontrado" 
//y un código de estado 404.
server.use("*", (req, res)=>{
  res.status(404).send("not found")
});

//Captura errores generados por otros middlewares o rutas y los maneja enviando un objeto JSON con un mensaje de error 
//y un código de estado correspondiente.
server.use((err, req, res, next)=>{
  res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
  })
});

module.exports = server;