const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try{
        res.send(await produtoService.findProductByIdService(req.params.id));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });       
    }

};

const findAllProductsController = async (req, res) => {
    try{
        res.send(await produtoService.findAllProductsService());
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });       
    }

};

const createProductController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
            createAt: new Date(),
        }

        res.send(await produtoService.createProductService(corpo));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });       
    }

};

const updateProductController = async (req, res) => {
    try{
        res.send(await produtoService.updateProductService(req.params.id, req.body)); 
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });       
    }

};

const deleteProductController = async (req, res) => {
    try{
        res.send(await produtoService.deleteProductService(req.params.id));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });       
    }
};

const addCategoriaProdutoCottroller = async (req, res) => {
    try {
        req.body.createAt = new Date();
        const categoria = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
        res.send(200).send(categoria);

    } catch {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeCategoriaProdutoCottroller = async (req, res) => {
    try {
        const categoria = await produtoService.removeCategoriaProdutoService(req.params.id, req.body);
        res.send(200).send(categoria);

    } catch {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoCottroller,
    removeCategoriaProdutoCottroller
}