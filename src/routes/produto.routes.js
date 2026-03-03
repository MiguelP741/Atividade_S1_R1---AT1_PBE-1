import produtoController from "../controllers/produto.controller.js";
import { Router } from "express";

const produtoRoutes = Router();

produtoRoutes.post('/categoria/produto', produtoController.criarProduto);
produtoRoutes.get('/categoria/produto', produtoController.selecionarTodosProdutos);
produtoRoutes.put('/categoria/produto', produtoController.atualizarProduto);
produtoRoutes.delete('/categoria/produto', produtoController.deletarProduto)

export default produtoRoutes