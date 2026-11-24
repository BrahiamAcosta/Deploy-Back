import * as service from "../services/peliculas.service.js";

export async function listar(_req, res, next) {
  try { res.status(200).json(await service.listarPeliculas()); }
  catch (error) { next(error); }
}
export async function crear(req, res, next) {
  try { res.status(201).json(await service.crearPelicula(req.body)); }
  catch (error) { next(error); }
}
export async function actualizar(req, res, next) {
  try { res.status(200).json(await service.actualizarPelicula(req.params.id, req.body)); }
  catch (error) { next(error); }
}
export async function eliminar(req, res, next) {
  try { await service.eliminarPelicula(req.params.id); res.status(204).send(); }
  catch (error) { next(error); }
}
