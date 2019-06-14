let router = require('express').Router();
let userController = require('../controller/userController');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to tomve.nl!',
        routes: ''
    });
});

// Import contact controller

// Contact routes
router.route('/contacts')
    .get(userController.index)
    .post(userController.new);
router.route('/contacts/:contact_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);


module.exports = router;
