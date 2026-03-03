import pool from "../config/loja.db.js";

const categoriaModel = {
    inserir: async (pCategoria) => {
        const sql = 'INSERT INTO categoria (descricaoCategoria, dataCad) VALUES (?,?);'
        const values = [pCategoria.descricaoCategoria, pCategoria.dataCad];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    selecionarTodos: async () => {
        const sql = "SELECT * FROM categoria;";
        const [rows] = await pool.execute(sql);
        return rows;
    },
    atualizar: async (pCategoria) => {
        const sql = 'UPDATE categoria SET descricaoCategoria = ? WHERE pCategoria = ?;';
        const values = [pCategoria.descricaoCategoria];
        const [rows] = await pool.execute(sql, values);
        return rows;
    },
    deletar: async (pCategoria) => {
        const sql = 'DELETE FROM categoria WHERE pCategoria = ?';
        const values = [pCategoria]
        const [rows] = await pool.execute (sql, values);
        return rows
    }

}

export default categoriaModel;