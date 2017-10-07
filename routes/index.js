var express = require('express');
var router = express.Router();
var db = '../queries.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUser/', db.addUser);
router.post('/storeItem/', db.storeItem);

module.exports = router;
