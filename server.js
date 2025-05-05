const express = require("express");
const path = require("path");
const app = express();
const db = require("./db");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HOME: Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "home.html"));
});

// USUARIO: Página del usuario
app.get("/usuario.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "usuarios.html"));
});

// RUTINAS: Página para añadir rutina
app.get("/rutinas.html", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "rutinas.html"));
});

// API: Todos los usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (err) {
    console.error("Error al obtener usuarios:", err);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

// API: Info de un usuario
app.get("/api/usuario/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM usuarios WHERE id_usuario = $1", [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error al obtener usuario:", err);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
});

// API: Rutinas de un usuario
app.get("/api/usuario/:id/rutinas", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM rutinas WHERE usuario_id = $1", [id]);
    res.json(result.rows);
  } catch (err) {
    console.error("Error al obtener rutinas:", err);
    res.status(500).json({ error: "Error al obtener rutinas" });
  }
});

// API: Añadir rutina
app.post("/api/usuario/:id/rutinas", async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    await db.query(
      "INSERT INTO rutinas (usuario_id, nombre, descripcion) VALUES ($1, $2, $3)",
      [id, nombre, descripcion]
    );
    res.status(201).send("Rutina añadida");
  } catch (err) {
    console.error("Error al añadir rutina:", err);
    res.status(500).json({ error: "Error al añadir rutina" });
  }
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
