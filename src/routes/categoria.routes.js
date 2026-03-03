import categoriaController from "../controllers/categoria.controller.js";
import { Router } from "express";

const categoriaRoutes = Router();

categoriaRoutes.post('/categoria', categoriaController.criarCategoria);
categoriaRoutes.get('/categoria', categoriaController.buscarCategorias);

export default categoriaRoutes;

