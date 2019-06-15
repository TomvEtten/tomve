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
router.route('/user')
    .get(userController.index)
    .post(userController.validate() ,userController.new);
router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);


module.exports = router;
