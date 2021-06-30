var express = require('express');
const router = express.Router();

const courses = [
    { id: 101, name: 'Angular', price: 120 },
    { id: 102, name: 'React', price: 220 },
    { id: 103, name: 'Node', price: 140 },
    { id: 104, name: 'Express', price: 180 },
    { id: 105, name: 'Mongo', price: 300 }
]

// GET Request: http://localhost:3000/courses/
router.get('/', (req, res) => {
    res.send(courses)
})

// GET Request with Parameter: http://localhost:3000/courses/101
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    res.send(course);
})

// POST Request:http://localhost:3000/courses
router.post('/', (req, res) => {
    var course = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };
    courses.push(course);
    res.send(courses);
})

// PUT Request: http://localhost:3000/courses/101
router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    course.name = req.body.name;
    course.price = req.body.price;
    res.send(course)
})

// DELETE Request: http://localhost:3000/courses/101
router.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id == req.params.id);
    if (!course)
        return res.status(404).send('The course with the given Id was not found.');
    courses.splice(courses.indexOf(course), 1);
    res.send(courses);
})

module.exports = router;