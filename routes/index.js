var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('./views/dist/index.html', { title: 'Express' });
    res.sendfile("./views/dist/index.html");
});

module.exports = router;
