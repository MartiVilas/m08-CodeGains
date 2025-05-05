const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");

const PORT = process.env.PORT || 3000;

// Home visual desde HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "home.html"));
});

// Página de usuario
app.get("/usuario", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "usuarios.html"));
});

// Página de rutinas
app.get("/rutinas", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "rutinas.html"));
});

// Página 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "views", "404.html"));
});

// Esta ruta responde a /api/usuarios con un JSON de todos los usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM usuarios");
    res.json(result.rows); // Devuelve los usuarios como JSON
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
