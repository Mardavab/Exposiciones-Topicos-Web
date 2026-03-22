// src/routes/usuarios.js
const express = require('express');
const router = express.Router();
const validarUsuario = require('../middlewares/validarUsuario');
const ctrl = require('../controllers/usuariosController');
router.get('/', ctrl.listarUsuarios);
router.get('/:id', ctrl.obtenerUsuario);
router.post('/', validarUsuario, ctrl.crearUsuario);
router.put('/:id', validarUsuario, ctrl.actualizarUsuario);
router.delete('/:id', ctrl.eliminarUsuario);
module.exports = router;