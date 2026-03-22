// src/middlewares/validarUsuario.js
function validarUsuario(req, res, next) {
    const { nombre, email } = req.body;
    if (!nombre || !email) {
        return res.status(400).json({
            exito: false, mensaje: 'nombre y email son obligatorios'
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ exito: false, mensaje: 'Formato de email inválido' });
    }
    next();
}
module.exports = validarUsuario;