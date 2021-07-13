var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'Node - Express - Mongodb - EJS - Project',
      message: 'We are using these modules into this project.'
    });

});

module.exports = router;
