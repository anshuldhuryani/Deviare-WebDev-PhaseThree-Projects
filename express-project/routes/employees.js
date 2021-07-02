var express = require('express');
var router = express.Router();
var Employee = require('../models/employee');

router.get('/', function (req, res) {
    Employee.find((err, employees) => {
        if (err) throw err;
        res.send(employees)
    });
});

router.post('/', function (req, res) {
    Employee.create(req.body, (err) => {
        if (err) throw err;
        res.send('Employee Added Successfully.')
    });
});

module.exports = router;
