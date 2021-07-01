var express = require('express');
const router = express.Router();
var productController = require('../controllers/product.controller');

router.get('/', productController.findAllProducts);

router.get('/:id', productController.findProductById);

router.post('/', productController.addProduct);

router.delete('/:id', productController.deleteProduct);

router.put('/:id', productController.updateProduct);

module.exports = router;