var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('https://coinzapp-jaya.herokuapp.com/login.html')
});
module.exports = router;
 