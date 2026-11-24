import express from "express";
import cors from "cors";
import peliculasRoutes from "./routes/peliculas.routes.js";
import { notFoundHandler, errorHandler } from "./middlewares/error.middleware.js";

const app = express();
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",").map(origin => origin.trim()).filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origen no permitido por CORS"));
  }
}));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ mensaje: "API de películas funcionando correctamente" });
});
app.use("/api/peliculas", peliculasRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
