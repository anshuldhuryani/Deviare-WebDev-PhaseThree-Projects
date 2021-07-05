var Customer = require('../models/customer');

module.exports.getAllCustomers = (req, res) => {
    Customer.find((err, data) => {
        if (err) throw err;
        res.send(data);
    });
};

module.exports.getCustomerById = (req, res) => {
    Customer.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("Customer doesn't exist with given Id.");
        res.send(data);
    });
};

module.exports.addCustomer = (req, res) => {
    Customer.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
};

module.exports.updateCustomer = (req, res) => {
    Customer.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("Customer doesn't exist with given Id.");
        Customer.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
};

module.exports.deleteCustomer = (req, res) => {
    Customer.findById(req.params.id, (err, data) => {
        if (err) throw err;
        if (!data)
            return res.status(404).send("Customer doesn't exist with given Id.");
        Customer.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) throw err;
            res.send(data);
        });
    });
};