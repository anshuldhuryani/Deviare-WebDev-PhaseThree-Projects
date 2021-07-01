var Category = require('../models/category.model');

module.exports.findAllCategories = (req, res) => {
    Category.find(function (err, categories) {
        if (err) throw err;
        res.send(categories);
    });
};

module.exports.findCategoryById = (req, res) => {
    Category.findById(req.params.id, function (err, category) {
        if (err)
            throw err;
        if (!category)
            return res.status(404).send('The category with the given Id was not found.');
        res.send(category);
    })
};

module.exports.addCategory = (req, res) => {
    Category.create(req.body, function (err) {
        if (err) throw err;
        res.send('Category Added Successfully.');
    })
}

module.exports.deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            throw err;
        res.send('Category Deleted Successfully.');
    })
}

module.exports.updateCategory = (req, res) => {
    Category.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err)
            throw err;
        res.send('Category Updated Successfully.');
    })
}
