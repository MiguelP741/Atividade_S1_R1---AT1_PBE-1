import categoriaController from "../controllers/categoria.controller.js";
import { Router } from "express";

const categoriaRoutes = Router();

categoriaRoutes.post('/categoria', categoriaController.criarCategoria);
categoriaRoutes.get('/categoria', categoriaController.buscarCategorias);

export default categoriaRoutes;





// import imageController from "../controllers/imagem.controller.js";
// const imagemRoutes = Router();
// imagemRoutes.post('/produtos/imagens', uploadImage, imageController.upload);