const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();// database.js
require('dotenv').config();
const port = process.env.PORT;
const cors = require("cors"); // Importa la librería cors
// database.js

// Habilita CORS para todas las solicitudes entrantes
app.use(cors());

// Importar las rutas
const excelRoutes = require("./routes/excelRoutes");

// Configurar rutas para archivos estáticos y la página HTML
app.use(express.static(path.join(__dirname, "public")));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ limit: "50mb" }));
// Configurar rutas
app.use("/", excelRoutes); // Rutas relacionadas con los archivos Excel

// Ruta para la página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Importar y ejecutar el archivo de inicialización de la base de datos
require("./config/database");

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


