var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '向MEAN全栈开发挺进，www.upsnail.com' });
});

module.exports = router;
