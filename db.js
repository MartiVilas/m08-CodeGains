const { Pool } = require("pg");

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: process.env.PGSSL === "true"
});

pool.connect()
  .then(() => console.log("Conexión remota a PostgreSQL establecida correctamente"))
  .catch(err => console.error("Error al conectar a PostgreSQL remota:", err));

module.exports = pool;
