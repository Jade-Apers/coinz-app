var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res,next)=>{
//signup
//username uit request halen
//password uit request hale
});

module.exports = router;
