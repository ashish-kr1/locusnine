var mongoose = require('mongoose');
var users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String
    },
    role: {
        type: String,
        enum: ['Admin', 'Customer Executive']
    }    
}, {
    versionKey: false,
    autoIndex: true,
    timestamps: true
});
module.exports = mongoose.model('users', users);