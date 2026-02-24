import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRoutes = Router();

produtoRoutes.post('/categoria/produto', produtoController.criarProduto);
produtoRoutes.get('/categoria/produto', produtoController.buscarProdutos);

export default produtoRoutes