import pool from "../config/loja.db.js";

const produtoModel = {
    inserir: async (pProduto) => {
        const sql = 'INSERT INTO produto (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?,?,?,?,?);'
        const values = [pProduto.idCategoria, pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    selecionarTodos: async () => {
        const sql = "SELECT * FROM produto;";
        const [rows] = await pool.execute(sql);
        return rows;
    }
}

export default produtoModel;