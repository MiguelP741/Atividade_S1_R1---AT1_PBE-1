import categoriaModel from "../models/categoria.model.js";

const categoriaController = {
    criarCategoria: async (req, res) => {
        try {
            const xml = req.body;

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const categoria = json.categoria;

                console.log(categoria);

                const result = await categoriaModel.insert({
                    descricaoCategoria: produto.descricaoCategoria[0],
                    dataCad: produto.dataCad[0]
                });

                if (result.insertId > 0) {
                    return res.status(201).json({ message: 'Categoria registrada com sucesso' });
                }
                res.status(400).json({ message: 'Ocorreu um erro ao inserir o registro' });

                // [""]

            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    buscarCategorias: async (req, res) => {
        try {
            const result = await categoriaModel.selectAll();

            if (result.length > 0) {
                
            }

            res.status(200).json({ message: 'Não há categorias para serem exibidas' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    }
}

export default categoriaController;