import * as repository from "../repositories/peliculas.repository.js";

function validarId(id) {
  const value = Number(id);
  if (!Number.isSafeInteger(value) || value <= 0) {
    const error = new Error("El identificador de la película no es válido.");
    error.status = 400;
    throw error;
  }
  return value;
}
function validarNombre(nombre) {
  if (typeof nombre !== "string" || !nombre.trim()) {
    const error = new Error("El campo 'nombre' es obligatorio.");
    error.status = 400;
    throw error;
  }
  const value = nombre.trim();
  if (value.length > 150) {
    const error = new Error("El nombre no puede superar los 150 caracteres.");
    error.status = 400;
    throw error;
  }
  return value;
}
export async function listarPeliculas() {
  return repository.obtenerTodas();
}
export async function crearPelicula(datos) {
  return repository.crear({ nombre: validarNombre(datos?.nombre) });
}
export async function actualizarPelicula(id, datos) {
  const pelicula = await repository.actualizar(validarId(id), {
    nombre: validarNombre(datos?.nombre)
  });
  if (!pelicula) {
    const error = new Error("No se encontró una película con ese identificador.");
    error.status = 404;
    throw error;
  }
  return pelicula;
}
export async function eliminarPelicula(id) {
  const eliminada = await repository.eliminar(validarId(id));
  if (!eliminada) {
    const error = new Error("No se encontró una película con ese identificador.");
    error.status = 404;
    throw error;
  }
}
