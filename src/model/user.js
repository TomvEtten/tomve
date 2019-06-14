const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export user model
let user = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}
