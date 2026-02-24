import pool from "../config/produto.db.js";

const categoriaModel = {
    insert: async (pProduto) => {
        const sql = 'INSERT INTO categoria (descricaoCategoria, dataCad) VALUES (?,?);'
        const values = [pProduto.descricaoCategoria, pProduto.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    selectAll: async () => {
        const sql = "SELECT * FROM categoria;";
        const [rows] = await pool.execute(sql);
        return rows;
    }
}

export default categoriaModel;