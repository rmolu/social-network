var Users = require('../models/users');

module.exports.getUsers = function (req, res) {
    Users.find({}, function (err, usersData) {
        if (err) {
            res.error(err);
        } else {
            res.json(usersData);
        }
    })
}