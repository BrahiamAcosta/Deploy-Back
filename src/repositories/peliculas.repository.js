import { supabase } from "../config/supabase.js";
const TABLE = "peliculas";

export async function obtenerTodas() {
  const { data, error } = await supabase.from(TABLE)
    .select("id, nombre").order("id", { ascending: true });
  if (error) throw error;
  return data;
}
export async function crear(datos) {
  const { data, error } = await supabase.from(TABLE)
    .insert(datos).select("id, nombre").single();
  if (error) throw error;
  return data;
}
export async function actualizar(id, datos) {
  const { data, error } = await supabase.from(TABLE)
    .update(datos).eq("id", id).select("id, nombre").maybeSingle();
  if (error) throw error;
  return data;
}
export async function eliminar(id) {
  const { data, error } = await supabase.from(TABLE)
    .delete().eq("id", id).select("id").maybeSingle();
  if (error) throw error;
  return data;
}
