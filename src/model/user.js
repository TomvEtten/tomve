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
const user = module.exports = mongoose.model('contact', userSchema);

module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}
