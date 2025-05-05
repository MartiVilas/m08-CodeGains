# Imagen base con Node.js
FROM node:18

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si lo tienes)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de tu servidor (3000)
EXPOSE 3000

# Comando para lanzar tu app
CMD ["node", "server.js"]
