const express = require('express');
const app = express();

app.use(express.json());

const practicaRoutes = require('./src/routes/practicaRoutes');
app.use('/practica', practicaRoutes);

app.listen(4000, () => {
  console.log('Servidor corriendo en http://localhost:4000');
});