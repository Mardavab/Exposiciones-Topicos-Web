FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Copiar dependencias primero (optimiza cache)
COPY package*.json ./

RUN npm install

# Copiar el resto del código
COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]