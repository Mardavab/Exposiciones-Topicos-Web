// src/server.js
const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const usuariosRouter = require('./routes/usuarios');
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares globales
app.use(express.json());
app.use(logger);
// Rutas
app.get('/', (req, res) => res.json({ mensaje: 'API funcionando', version: '1.0.0' }));
app.use('/usuarios', usuariosRouter);
// 404 genérico
app.use((req, res) => res.status(404).json({ exito: false, mensaje: `Ruta "${req.url}" no
encontrada` }));
// Error handler (siempre al final)
app.use(errorHandler);
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));