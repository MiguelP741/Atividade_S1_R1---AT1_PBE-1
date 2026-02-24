import produtoModel from "../models/produto.model.js";


const produtoController = {
    criarProduto: async (req, res) => {
        try {
            const xml = req.body;

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const produto = json.produto;

                console.log(produto);

                const result = await produtoModel.insert({
                    idCategoria: produto.idCategoria[0],
                    nomeProduto: produto.nomeProduto[0],
                    valorProduto: produto.valorProduto[0],
                    vinculoImagem: produto.vinculoImagem[0],
                    dataCad: produto.dataCad[0]
                });

                if (result.insertId > 0) {
                    return res.status(201).json({ message: 'Produto criado com sucesso!' });
                }
                res.status(400).json({ message: 'Ocorreu um erro ao inserir o produto' });

                // [""]

            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    buscarProdutos: async (req, res) => {
        try {
            const result = await produtoModel.selectAll();

            if (result.length > 0) {
                res.status(400).json({message: 'Não foi encontrado nenhum produto'});
            }

            res.status(200).json({ message: 'Os produtos são:', data: result });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    }
}

export default produtoController;