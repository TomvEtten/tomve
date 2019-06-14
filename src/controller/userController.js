user = require('../model/user');
// Handle index actions
exports.index = function (req, res) {
    user.get(function (err, users) {
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
// Handle create contact actions
exports.new = function (req, res) {
    let user = new user();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;
// save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    user.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'user details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    user.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name ? req.body.name : user.name;
        user.gender = req.body.gender;
        user.email = req.body.email;
        user.phone = req.body.phone;
// save the contact and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'user Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    user.remove({
        _id: req.params.contact_id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'user deleted'
        });
    });
};
