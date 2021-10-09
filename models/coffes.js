import mongoose from 'mongoose';


let coffeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.coffeSchema || mongoose.model('coffes', coffeSchema);