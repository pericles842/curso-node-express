const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
// Definir las rutas para productos
router.get('/list', ProductController.listProducts);

module.exports = router;