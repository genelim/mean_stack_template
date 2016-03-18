var User = require('../models/user.js');

exports.get_user = function (req, res) {
    User.find(function(err, user) {
        if (err)
            res.send(err);
        res.json(user); 
    });
};