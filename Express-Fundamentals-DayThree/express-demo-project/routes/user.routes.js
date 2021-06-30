var express = require('express');
const router = express.Router();
var User = require('../models/user.model');

http://localhost:3000/users
router.get('/', (req, res) => {
    res.send('User Page')
})

router.post('/', (req, res) => {
    User.create(req.body, (err) => {
        if (err) throw err;
        res.send('User Added Successfully.');
    })
})

module.exports = router;