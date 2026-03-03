import produtoModel from '../models/produto.model.js';
import xml2js from 'xml2js';

const produtoController = {
    criarProduto: async (req, res) => {
        try {
            const xml = req.body;


            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const produto = json.produto;

                const vinculoImagem = req.file.path

                console.log(produto);

                const result = await xmlModel.inserirP({
                    nomeProduto: produto.nomeProduto[0],
                    valorProduto: produto.valorProduto[0],
                    vinculoImagem: produto.vinculoImagem[0],
                    dataCad: produto.dataCad[0]
                });

                if (result.insertId > 0) {
                    return res.status(201).json({ message: 'Produto inserido com sucesso' });
                }
                res.status(400).json({ message: 'Ocorreu um erro ao inserir o produto' });

            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    selecionarTodosProdutos: async (req, res) => {
        try {
            const result = await xmlModel.selecionarTodosP();

            if (result.length > 0) {
                const estrutura = new xml2js.Builder({
                    rootName: 'produto',
                    xmldec: { version: '1.0', encoding: 'UTF-8' }
                });

                const xml = estrutura.buildObject({ produto: result });
                res.set('Content-Type', 'application/xml');
                return res.status(200).send(xml);
            }

            res.status(200).json({ message: 'Não há produtos para serem exibidos' });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    atualizarProduto: async (req, res) => {
        try {
            const xml = req.body;

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const produto = json.produto;

                const idProduto = produto.idProduto ? produto.idProduto[0] : null;

                if (!idProduto) {
                    return res.status(400).json({ message: 'O ID do produto deve ser fornecido no XML' });
                }

                const result = await xmlModel.atualizarP(idProduto, {
                    nomeProduto: produto.nomeProduto[0],
                    valorProduto: produto.valorProduto[0],
                    vinculoImagem: produto.vinculoImagem[0],
                    dataCad: produto.dataCad[0]
                });
                if (result.affectedRows > 0) {
                    return res.status(200).json({ message: 'Produto atualizado com sucesso!' });
                }

                res.status(404).json({ message: 'Produto não encontrado ou nenhuma alteração feita' });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    deletarProduto: async (req, res) => {
        try {
            const xml = req.body;

            xml2js.parseString(xml, async (err, json) => {
                if (err) {
                    return res.status(400).json({ message: 'XML inválido' });
                }

                const produto = json.produto;
                const idProduto = produto.idProduto ? produto.idProduto[0] : null;
                if (!idProduto) {
                    return res.status(400).json({ message: 'O ID do produto não foi informado' });
                }

                const result = await xmlModel.deletarP(id);
                if (result.affectedRows > 0) {
                    return res.status(200).json({ message: 'Produto deletado com sucesso!' });
                }

                res.status(404).json({ message: 'Produto não encontrado ou nenhuma alteração feita' });
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    }
}


export default produtoController;
