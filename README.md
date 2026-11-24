# Backend CRUD de películas

API REST con Node.js, Express y Supabase, organizada en capas.

## Crear la tabla en Supabase
1. Abre tu proyecto Supabase.
2. Entra a **SQL Editor** y selecciona **New query**.
3. Copia y ejecuta el contenido de `database/schema.sql`.
4. Se creará `public.peliculas` con `id`, `nombre` y `created_at`.

## Configuración
Copia `.env.example` como `.env` y completa:
- `SUPABASE_URL`: URL del proyecto (Project Settings > API).
- `SUPABASE_SERVICE_ROLE_KEY`: clave secreta del backend.
- `FRONTEND_URL`: origen exacto del frontend; localmente `http://localhost:5173`.
- `PORT`: puerto local; en Render se asigna automáticamente.

**Seguridad:** la clave `SUPABASE_SERVICE_ROLE_KEY` tiene privilegios elevados. Solo debe estar en el backend. Nunca la incluyas en React, en una variable `VITE_` ni en GitHub. El archivo `.env` está excluido por `.gitignore`.

## Ejecutar
```bash
npm install
npm run dev
```
API local: `http://localhost:3000`.

## Endpoints
| Método | Ruta | Body | Resultado |
|---|---|---|---|
| GET | `/api/peliculas` | — | Lista de películas |
| POST | `/api/peliculas` | `{ "nombre": "Dune" }` | Crea (201) |
| PUT | `/api/peliculas/:id` | `{ "nombre": "Dune: Parte Dos" }` | Actualiza |
| DELETE | `/api/peliculas/:id` | — | Elimina (204) |

Formato compatible con CineList:
```json
[
  { "id": 1, "nombre": "Interestelar" },
  { "id": 2, "nombre": "Matrix" }
]
```

## Conectar el frontend
En el `.env` del frontend:
```env
VITE_API_URL=http://localhost:3000
```
Reinicia Vite después de cambiar el archivo. En producción, configura `VITE_API_URL` con la URL pública de este backend y `FRONTEND_URL` con el dominio del frontend.

## Despliegue en Render
- Build Command: `npm install`
- Start Command: `npm start`
- Variables: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `FRONTEND_URL`.
Render proporciona `PORT`.

Prueba `https://TU-BACKEND.onrender.com/` y `https://TU-BACKEND.onrender.com/api/peliculas`.

## Capas
- `routes`: asocia URLs y métodos HTTP con controladores.
- `controllers`: recibe solicitudes y devuelve respuestas HTTP.
- `services`: valida entradas y aplica reglas de negocio.
- `repositories`: ejecuta consultas a Supabase.
- `config`: configura el cliente de Supabase.
- `middlewares`: maneja errores y rutas inexistentes.
