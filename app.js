// app.js
const express = require('express');
const path = require('path');
const routesPrincipal = require('./routes/routesPrincipal');
const routesTema1 = require('./routes/routesTema1');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas desde routes/
app.use('/content', routesPrincipal);
app.use('/content/tema-1', routesTema1);

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
