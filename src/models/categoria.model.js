import pool from "../config/loja.db.js";

const categoriaModel = {
    inserirC: async (pCategoria) => {
        const sql = 'INSERT INTO categoria (descricaoCategoria, dataCap) VALUES (?,?);'
        const values = [pCategoria.descricaoCategoria, pCategoria.dataCap];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    selecionarTodosC: async () => {
        const sql = "SELECT * FROM categoria;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    atualizarC: async (pCategoria) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ? WHERE pCategoria = ?;';
        const values = [pCategoria.descricaoCategoria];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    deletarC: async (pCategoria) => {
        const sql = 'DELETE FROM categoria WHERE pCategoria = ?';
        const values = [pCategoria]
        const [rows] = await pool.execute (sql, values);
        return rows
    }

}

export default categoriaModel;