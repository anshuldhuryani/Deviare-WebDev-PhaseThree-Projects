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

module.exports = router;
