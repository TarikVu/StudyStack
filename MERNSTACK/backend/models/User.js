const mongoose = require('mongoose');

// Our Schema for Users.
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            type: String,
            default: "Employee"
        }],
        active: {
            type: Boolean,
            default: true
        }
    }
);

// Export this schema withe the name 'User'.
module.exports = mongoose.model('User', userSchema)