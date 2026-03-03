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

                const result = await categoriaModel.inserir({
                    descricaoCategoria: categoria.descricaoCategoria[0],
                    dataCad: categoria.dataCad[0]
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
    buscarTodasCategorias: async (req, res) => {
        try {
            const result = await xmlModel.selecionarTodos();

            if (result.length > 0) {
                const estrutura = new xml2js.Builder({
                    rootName: 'categoria',
                    xmldec: { version: '1.0', encoding: 'UTF-8' }
                });

                const xml = estrutura.buildObject({ produto: result });
                res.set('Content-Type', 'application/xml');
                return res.status(200).send(xml);
            }

            res.status(200).json({ message: 'Não há categorias para serem exibidas' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    atualizarCategoria: async (req,res) => {
        const xml = req.body;

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const categoria = json.categoria;

                console.log(categoria);

                const result = await categoriaModel.inserir({
                    descricaoCategoria: categoria.descricaoCategoria[0],
                    dataCad: categoria.dataCad[0]
                });

                if (result.insertId > 0) {
                    return res.status(201).json({ message: 'Categoria registrada com sucesso' });
                }
                res.status(400).json({ message: 'Ocorreu um erro ao inserir o registro' });

                // [""]

            })
    }
    
}

export default categoriaController;
