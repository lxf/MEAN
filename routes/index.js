var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '向 MEAN 全栈开发挺进' });
});

module.exports = router;
