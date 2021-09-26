import mongoose from 'mongoose';


let usersSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    }
});

module.exports = mongoose.models.User || mongoose.model('User', usersSchema);