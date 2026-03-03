import express from "express";
import categoriaRoutes from "./routes/categoria.routes.js";
import produtoRoutes from "./routes/produto.routes.js";
import bodyParser from 'body-parser';
import 'dotenv/config'

const app = express();

app.use(bodyParser.text({type:'application/xml'}));
app.use('/', categoriaRoutes);
app.use('/', produtoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})

