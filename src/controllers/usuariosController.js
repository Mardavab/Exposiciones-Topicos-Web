const listarUsuarios = (req, res) => {
let resultado = [...usuarios];
if (req.query.edadMin) {
resultado = resultado.filter(u => u.edad >= parseInt(req.query.edadMin));
}
if (req.query.nombre) {
const termino = req.query.nombre.toLowerCase();
resultado = resultado.filter(u => u.nombre.toLowerCase().includes(termino));
}
res.json({ exito: true, total: resultado.length, datos: resultado });
};
const obtenerUsuario = (req, res) => {
    const id = parseInt(req.params.id);
const usuario = usuarios.find(u => u.id === id);
if (!usuario) {
return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
}
res.json({ exito: true, datos: usuario });
};

const crearUsuario = (req, res) => {
const { nombre, email, edad } = req.body;
const emailExiste = usuarios.some(u => u.email === email);
if (emailExiste) {
return res.status(409).json({ exito: false, mensaje: 'Email ya registrado' });
}
const nuevoUsuario = { id: Date.now(), nombre, email, edad: edad || null };
usuarios.push(nuevoUsuario);
res.status(201).json({ exito: true, mensaje: 'Usuario creado', datos: nuevoUsuario });
};
const actualizarUsuario = (req, res) => {
const id = parseInt(req.params.id);
const index = usuarios.findIndex(u => u.id === id);
if (index === -1) {
return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
}
// Spread: mezcla datos existentes con los nuevos (sin sobreescribir el id)
const { id: _ignorado, ...cambios } = req.body;
usuarios[index] = { ...usuarios[index], ...cambios };
res.json({ exito: true, datos: usuarios[index] });
};
const eliminarUsuario = (req, res) => {
const id = parseInt(req.params.id);
const index = usuarios.findIndex(u => u.id === id);
if (index === -1) {
return res.status(404).json({ exito: false, mensaje: 'Usuario no encontrado' });
}
usuarios.splice(index, 1);
res.json({ exito: true, mensaje: 'Usuario eliminado correctamente' });
};
// Exportar todo al final del archivo
module.exports = { listarUsuarios, obtenerUsuario, crearUsuario, actualizarUsuario,
eliminarUsuario };