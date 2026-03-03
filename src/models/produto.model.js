import pool from "../config/loja.db.js";

const produtoModel = {
    insertP: async (pProduto) => {
        const sql = 'INSERT INTO produto (idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad) VALUES (?,?,?,?,?);'
        const values = [pProduto.idCategoria, pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    buscarTodosP: async () => {
        const sql = "SELECT * FROM produto;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    buscarP: async (pProduto) => {
        const sql = 'UPDATE produto SET nomeProduto = ?, valorProduto = ?, vinculoimagem = ? WHERE pProduto = ?;';
        const values = [pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoimagem];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    deletarP: async (pProduto) => {
        const sql = 'DELETE FROM produto WHERE pProduto = ?';
        const values = [pProduto]
        const [rows] = await pool.execute(sql, values);
        return rows
    }
}

export default produtoModel;