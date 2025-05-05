const { Pool } = require("pg");

const pool = new Pool({
  user: "maury444_marti",
  host: "postgresql-maury444.alwaysdata.net",
  database: "maury444_codegains",
  password: "marti123itb",
  port: 5432,
  ssl: {
    rejectUnauthorized: false // Importante para conexiones externas
  }
});

pool.connect()
  .then(() => console.log("Conexión remota a PostgreSQL establecida correctamente"))
  .catch(err => console.error("Error al conectar a PostgreSQL remota:", err));

module.exports = pool;
