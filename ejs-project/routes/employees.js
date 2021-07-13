var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee');

/* GET Request for Employee List */
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

/* GET Request for Employee Create */
router.get('/create', (req, res) => {
    res.render('../views/employees/create');
})

/* POST Request for Employee Create */
router.post('/save', function (req, res, next) {
    var employee = new Employee(req.body);
    Employee.create(employee, (err, data) => {
        if (err) throw err;
        // res.send(data);
        res.redirect('/employees/' + data._id);
    })
});


router.get('/edit/:id', function (req, res, next) {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        if (!employee) return res.status(404).send('Employee Doesnt exist with this Id.');
        res.render('../views/employees/employee-edit', { employee: employee });
    })

});


/* GET Request for Employee By Id */
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        if (!employee) return res.status(404).send('Employee Doesnt exist with this Id.');
        res.render('../views/employees/employee-detail', { employee: employee });
    })
})

/* DELETE Request */
router.post('/delete/:id', (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        if (!employee) return res.status(404).send('Employee Doesnt exist with this Id.');
        Employee.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;
            res.redirect('/employees');
        });
    });
})

/* DELETE Request */
router.post('/update/:id', (req, res) => {
    console.log('I am called..')
    Employee.findById(req.params.id, (err, employee) => {
        if (err) throw err;
        if (!employee) return res.status(404).send('Employee Doesnt exist with this Id.');
        var employee = {
            name: req.body.name,
            address: req.body.address,
            position: req.body.position,
            salary: req.body.salary
        };
        Employee.findByIdAndUpdate(req.params.id, employee, (err) => {
            if (err) throw err;
            res.redirect('/employees');
        });
    });
})


module.exports = router;
