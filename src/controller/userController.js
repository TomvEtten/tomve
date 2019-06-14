user = require('../model/user');
// Handle index actions
exports.index = function (req, res) {
    user.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "user retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    let contact = new user();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New user created!',
            data: contact
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
    user.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
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
