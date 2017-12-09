var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */

router.get('/', function(req, res, next) {
    request(req.query.url,function(err,response,body){
        if(!err){
            res.send(JSON.parse(body));
        } else {
            res.send({
                msgTip: '请求失败',
                msgContent: err
            })
        }
        
    });
});

module.exports = router;