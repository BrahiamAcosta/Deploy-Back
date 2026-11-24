export function notFoundHandler(req, res, _next) {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
}
export function errorHandler(error, _req, res, _next) {
  console.error(error);
  const status = Number.isInteger(error.status) ? error.status : 500;
  res.status(status).json({
    error: status >= 500 ? "Ocurrió un error interno en el servidor." : error.message
  });
}
