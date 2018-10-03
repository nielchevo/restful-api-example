var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var userModel = require('../models/userModel');

// ADD New User
router.post('/', function(req, res, next) {

    var promise = userModel.create({
        userName :      req.body.user_name,  
        date_of_birth : req.body.date_of_birth,
        date_joined :   req.body.date_joined,
        article_id :    req.body.article_body,
        comment_id :    req.body.post_id
    })

    promise.then(function(dbSuccess) {
        res.status(200).send(dbSuccess);
    }, function(dbError) {
        res.status(500).send("there is an error when creating data");
    })
});

router.get('/',function(req, res, next){
    userModel.find({}, function(err, results) {
        if(err) {
            return res.status(500).send("there was an error find the user."); 
        }

        res.status(200).send(results);
    });
});

module.exports = router;