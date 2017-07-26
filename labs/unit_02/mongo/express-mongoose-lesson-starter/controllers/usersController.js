var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => {

    User.find({})
      
        .then((users) => {
            console.log(users[1]._id)
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`ERROR!!!!! ${error}`)
        })

})

// USER SHOW ROUTE
router.get('/:id', (req, res) => {

    User.findById(req.param.id)
        .then((user) => {
            res.render('users/show', {
                user: user
            })
        })
})

// USER CREATE ROUTE

// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;