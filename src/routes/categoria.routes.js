import categoriaController from "../controllers/categoria.controller.js";
import { Router } from "express";

const categoriaRoutes = Router();

categoriaRoutes.post('/categoria', categoriaController.criarCategoria);
categoriaRoutes.get('/categoria', categoriaController.selecionarTodasCategorias);
categoriaRoutes.put('/categoria', categoriaController.atualizarCategoria);
categoriaRoutes.delete('/categoria', categoriaController.deletarCategoria)

export default categoriaRoutes;

