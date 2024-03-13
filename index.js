const server = require('./src/app.js'); // Importamos el modulo app con el server.
const { conn } = require('./src/db.js'); // Importamos la conexión a la base de datos.
require("dotenv").config(); // Carga las variables de entorno.

const port = process.env.PORT || 3001; // Importamos el PUERTO desde las variables de entorno 
// y si no esta definido  utiliza el 3001.
// Syncing all the models at once.
conn.sync({ alter: true }).then(() => { // sincroniza todos los modelos definidos en el archivo
  server.listen(port, () => {            // de conexión a la base de datos db.js.
    console.log(`listening at ${port} `); 
  });
});

/* El parámetro { alter: true } indica que Sequelize debe intentar aplicar automáticamente 
cualquier cambio en el esquema de la base de datos que sea necesario para que coincida con
la definición del modelo. Esto es útil durante el desarrollo, pero debe tenerse cuidado 
en producción, ya que los cambios automáticos pueden tener consecuencias no deseadas en los
datos existentes. 
Cuando se usa { force: true }, Sequelize eliminará todas las tablas existentes de la base de 
datos y las recreará según los modelos definidos en tu aplicación. */
