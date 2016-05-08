var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function (err, user) {
                res.status(200).json(user);
            });
    }

};


module.exports.updateUsername = function (req, res) {
    var username = req.body.username;
    var userId = req.body.userId;

    User.findById(userId, function (err, userData) {
        var user = userData;
        user.username = username;

        user.save(function (err) {
            if (err) {
                console.log("fail");
                res.json({
                    status: 500
                });
            } else {
                console.log("success");
                res.json({
                    status: 200
                });
            }
        })
    });
};