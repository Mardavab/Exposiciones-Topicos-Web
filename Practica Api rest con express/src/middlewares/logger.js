// src/middlewares/logger.js
function logger(req, res, next) {
const ahora = new Date().toISOString();
console.log(`[${ahora}] ${req.method} ${req.url}`);
next(); // Sin esto la petición queda bloqueada
}
module.exports = logger;
