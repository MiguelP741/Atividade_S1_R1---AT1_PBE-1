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

                const result = await xmlModel.inserir({
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
            const result = await xmlModel.selecionarTodos();

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
    }
}

export default produtoController;

// import produtoModel from "../models/produto.model.js";
// const produtoController = {
//     criarProduto: async (req, res) => {
//         try {
//     console.log (req.body)
//             const { idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad } = req.body;

//             if (idCategoria == undefined || nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto) || vinculoImagem == undefined || dataCad == undefined) {
//                 return res.status(400).json({ erro: 'campos OBRIGATÓRIOS não preenchidos' })
//             }

//             await produtoModel.insert( idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad);

//             res.status(201).json({ message: 'produto cadastrado com sucesso!' });

//         } catch (error) {
//             console.error('erro ao cadastrar o produto!', error)
//             res.status(500).json({ error: 'erro no servidor ao cadastrar o produto' });
//         }
//     },

//     listarProdutos: async (req, res) => {
//         try {
//             const { idProduto } = req.query;
          
//             if(idProduto){
// const produto = await produtoModel.buscarUm(idProduto);

//                 return res.status(200).json(produto);
//             }else {
//                 const produtos = await produtoModel.buscarTodos();
//                 return res.status(200).json(produtos);
//             }

//         } catch (error) {
//             console.error('erro ao listar produtos:', error);
//             res.status(500).json({ message: 'Error ao buscar produto' })
//         }
//     },

//     deletarProduto: async (req, res) => {
//         try {

//             const { idProduto } = req.params;

//             await produtoModel.deletarProduto(idProduto);

//             res.status(200).json({ message: "Produto deletado com sucesso!" })

//         } catch (error) {
//             console.error('Erro ao deletar produto', error);
//             res.status(500).json({ erro: "Erro no servidor ao deletar o produto" });
//         }
//     }
// }

// export default produtoController