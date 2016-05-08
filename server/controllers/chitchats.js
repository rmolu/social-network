var Chitchat = require('../models/chitchats');

module.exports.postChitchat = function (req, res) {
    var chitchat = new Chitchat(req.body);
    chitchat.save();

    Chitchat.find({})
        .sort({
            date: -1
        })
        .exec(function (err, allChitchats) {
            if (err) {
                res.error(err);
            } else {
                res.json(allChitchats);
            }
        });
}

module.exports.getChitchats = function (req, res) {
    console.log(req.body);

    Chitchat.find({})
        .sort({
            date: -1
        })
        .exec(function (err, allChitchats) {
            if (err) {
                res.error(err)
            } else {
                res.json(allChitchats);
            }
        })
};