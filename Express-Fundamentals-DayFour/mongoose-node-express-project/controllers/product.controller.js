var Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find(function (err, products) {
        if (err) throw err;
        res.send(products);
    });
};

module.exports.findProductById = (req, res) => {
    Product.findById(req.params.id, function (err, product) {
        if (err)
            throw err;
        if (!product)
            return res.status(404).send('The product with the given Id was not found.');
        res.send(product);
    })
};

module.exports.addProduct = (req, res) => {
    Product.create(req.body, function (err) {
        if (err) throw err;
        res.send('Product Added Successfully.');
    })
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            throw err;
        res.send('Product Deleted Successfully.');
    })
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err)
            throw err;
        res.send('Product Updated Successfully.');
    })
}
