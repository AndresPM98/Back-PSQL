require("dotenv").config(); // Carga las variables de entorno.
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs"); // File System de Node permite interactuar con el sistema de archivos del sistema operativo.
const path = require("path"); // Modulo de Node que permite trabajar con rutas de archivos y directorios.

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME ,DB_PORT} = process.env;

//Creamos una nueva instancia de Sequelize para interactuar con la base de datos.
const sequelize = new Sequelize( 
  // Esta es la URL de conexión a la base de datos PostgreSQL.
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,  
  {                                                                        
    logging: false, // Esta opción deshabilita el registro de consultas SQL en la consola.
    native: false, // Esta opción deshabilita la carga de los módulos nativos de la base de datos.
  }
);

const basename = path.basename(__filename); // "__filename"Variable global en Node.js que representa la ruta 
                                            // absoluta del archivo actual.
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// Se filtran los archivos que empiezan con un punto. 
// Asegura que el archivo actual no sea el archivo base.
// Selecciona solo los archivos con extensión JavaScript.
    (file) =>     
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(        
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos.
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
//Obtener una matriz de pares clave-valor de los modelos de Sequelize.
let entries = Object.entries(sequelize.models); 
// Para cada entrada, el nombre del modelo se capitaliza (la primera letra se convierte en mayúscula)
// utilizando toUpperCase() en el primer carácter de la cadena (entry[0][0]) y luego se agrega el resto 
//de la cadena (entry[0].slice(1)).
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
// Se utiliza para convertir las matrices de pares clave-valor de nuevo en un objeto con los nombres de 
//los modelos capitalizados.
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

/* const {User, Client} = sequelize.models;

User.hasMany(Client, { foreignKey: 'user_Id' }); //Relacion entre Modelos de uno a muchos mediante id del User.
Client.belongsTo(User, { foreignKey: 'user_Id' }); */

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
