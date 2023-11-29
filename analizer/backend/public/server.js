const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://juanc96:<juancruz>@cluster0.qmc9iku.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión exitosa a MongoDB');
})
.catch(error => {
    console.error('Error de conexión a MongoDB:', error);
});

// Rutas para archivos estáticos y página HTML
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
