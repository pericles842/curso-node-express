const ProductsModel = require('../models/productModel');

const ProductController = {
    listProducts: async (req, res) => {
        try {
            const usuarios = await ProductsModel.listProducts();
            res.send(usuarios);
        } catch (error) {
            res.status(500).send('Error al obtener Productos');
        }
    }
};

module.exports = ProductController;