var express = require('express');
const router = express.Router();
var categoryController = require('../controllers/category.controller');

// Request URL: http://localhost:3000/categories
router.get('/', categoryController.findAllCategories);

// Request URL: http://localhost:3000/categories/60dd852d8b16181a2831e6fb
router.get('/:id', categoryController.findCategoryById);

// Request URL: http://localhost:3000/categories
// Request Body: { "name": "Laptop", "desc": "Laptop Description"}
router.post('/', categoryController.addCategory);

// Request URL: http://localhost:3000/categories/60dd852d8b16181a2831e6fb
router.delete('/:id', categoryController.deleteCategory);

// Request URL: http://localhost:3000/categories/60dd852d8b16181a2831e6fb
// Request Body: { "name": "Laptop", "desc": "Laptop Description"}
router.put('/:id', categoryController.updateCategory);

module.exports = router;