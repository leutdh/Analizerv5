// database.js
require('dotenv').config();

const urlapi = process.env.API_DATABASE;

const mongoose = require("mongoose");

// Establece la conexión a la base de datos
mongoose
  .connect(
    urlapi,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexión a la base de datos establecida.");

    // Importa el archivo de inicialización y ejecútalo
  })
  .catch((error) => {
    console.error("Error en la conexión a la base de datos:", error);
  });

   // require('../controllers/Controller');
// require('../controllers/excelController');
 // require('../controllers/ProcSocios');
// require('../controllers/ResumenSima');
// require('../controllers/ResumenAdm');
// require('../controllers/ProcesarCargos');
// require('../controllers/ProcesarPrest');
