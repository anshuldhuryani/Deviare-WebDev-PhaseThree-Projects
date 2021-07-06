var express = require('express');
var router = express.Router();
var customerController = require('../controllers/customer');

// API Url: http://localhost:3000/customers
router.get('/', customerController.getAllCustomers);

// API Url: http://localhost:3000/customers/60e2d7bf68838f5b4c1f7298
router.get('/:id', customerController.getCustomerById);

// API Url: http://localhost:3000/customers
// Header: Content-Type: application/json
// Request Body: { "name":"King Kochhar", "age":33, "email":"king.kochhar@gmail.com" }
router.post('/', customerController.addCustomer);

// API Url: http://localhost:3000/customers/60e2d7bf68838f5b4c1f7298
// Header: Content-Type: application/json
// Request Body: { "name":"Kartik Sharma", "age":42, "email":"kartik.sharma@gmail.com" }
router.put('/:id', customerController.updateCustomer);

// API Url: http://localhost:3000/customers/60e2d7bf68838f5b4c1f7298
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;