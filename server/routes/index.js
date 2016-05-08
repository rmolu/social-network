var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlChitchat = require('../controllers/chitchats')
var ctrlUsers = require('../controllers/users')

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.post('/profile/update-username', ctrlProfile.updateUsername);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


//chitchat
router.post('/chitchat/post', ctrlChitchat.postChitchat);
router.post('/chitchat/get', ctrlChitchat.getChitchats);

//User
router.get('/users/get', ctrlUsers.getUsers);


module.exports = router;