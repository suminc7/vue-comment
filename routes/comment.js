var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    console.dir(req.body.title);
    res.json({data: 1});
})

router.get('/', function(req, res){
    res.json({result: 1});
});

module.exports = router;