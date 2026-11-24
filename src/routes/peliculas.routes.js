import { Router } from "express";
import * as controller from "../controllers/peliculas.controller.js";

const router = Router();
router.get("/", controller.listar);
router.post("/", controller.crear);
router.put("/:id", controller.actualizar);
router.delete("/:id", controller.eliminar);
export default router;
