# 💪 CodeGains

**CodeGains** és una aplicació web desenvolupada en Node.js que permet gestionar usuaris i rutines d'entrenament. El projecte es connecta a una base de dades PostgreSQL (remota o local) i utilitza HTML + TailwindCSS per oferir una interfície moderna i responsive.

---

## 🚀 Funcionalitats

- Visualització d’usuaris registrats  
- Perfil detallat de cada usuari  
- Visualització de les seves rutines  
- Afegir noves rutines des del navegador  
- Interfície responsive amb Tailwind CSS  
- Contenidoritzada amb Docker  

---

## 🧱 Tecnologies utilitzades

- **Node.js + Express**  
- **PostgreSQL** (remota a AlwaysData o local via Docker)  
- **HTML + JavaScript**  
- **Tailwind CSS**  
- **Docker + Docker Compose**

---

## 🔧 Instruccions (Docker)

### 1. Construir i arrencar l’aplicació

```bash
docker compose up --build
```

📍 Accedeix a: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estructura del projecte

```
m08-node-js/
├── server.js
├── db.js
├── Dockerfile
├── docker-compose.yml
├── src/
│   └── views/
│       ├── home.html
│       ├── usuario.html
│       ├── rutinas.html
│       └── 404.html
```

---

## 🧪 MVP – Minimum Viable Product

- Visualització d’usuaris i rutines  
- Inserció de rutines associades a cada usuari  
- Interfície funcional i accessible  
- Entorn portable gràcies a Docker  

---

## 👨‍💻 Autors

**Lokokom Team**  
Martí Vilas · Mauricio Huamaní · Ashmed Barreiro · Argar Crespo
