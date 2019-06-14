User = require('../model/user');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "user(s) retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = function (req, res) {
    let user = new User()
    user.name = req.body.name ? req.body.name : 'template'
    user.gender = req.body.gender ? req.body.gender : 'apache attack helpicopter'
    user.email = req.body.email ? req.body.email : 'apache@attackheli.chopper'
    user.phone = req.body.phone ? req.body.phone : 'call 09009009'

    user.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};

exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err)
        res.json({
            message: 'user details',
            data: user
        });
    });
};

exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name ? req.body.name : user.name
        user.gender = req.body.gender
        user.email = req.body.email
        user.phone = req.body.phone

        user.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: 'user Info updated',
                data: user
            });
        });
    });
};

exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'user deleted'
        });
    });
};
