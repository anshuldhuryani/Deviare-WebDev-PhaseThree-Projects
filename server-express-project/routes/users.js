var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res) {
  User.find((err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

router.post('/', function (req, res) {
  User.create(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

router.post('/login', function (req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).send("User doesn't exist with this email.");
    res.send(user);
  })
})

module.exports = router;
