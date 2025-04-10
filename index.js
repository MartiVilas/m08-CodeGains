const express = require('express');
const path = require('path');
const app = express();

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'home.html'));
});

// Ruta para cualquier otra cosa (404)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'src', 'views', '404.html'));
});

// Arrancar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
