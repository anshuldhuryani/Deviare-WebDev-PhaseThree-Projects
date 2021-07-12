var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee');

/* GET Request */
router.get('/', function (req, res, next) {
    Employee.find((err, data) => {
        if (err) throw err;
        // res.send(data);
        res.render('../views/employees/index', {
            title: 'Employee List',
            employees: data
        });
    })
});

/* POST Request */
router.post('/', function (req, res, next) {
    Employee.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.get('/something', function (req, res, next) {
    res.send('Employee Something');
});

module.exports = router;
