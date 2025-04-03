const { poolPromise } = require('../config/db');

class ProductsModel {
    static async listProducts() {
        try {
            const product = [
                {
                    id: 1,
                    name: 'Producto 1',
                    description: 'Descripción del producto 1',
                    price: 10.99,
                    image: 'imagen1.jpg',
                },
                {
                    id: 2,
                    name: 'Producto 2',
                    description: 'Descripción del producto 2',
                    price: 19.99,
                    image: 'imagen2.jpg',
                }
            ];
            return product;
        } catch (error) {
            console.error('Error al obtener producto:', error);
            throw error;
        }
    }
}

module.exports = ProductsModel;