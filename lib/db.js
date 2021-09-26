import mongoose from 'mongoose';

const connection = mongoose.connect("mongodb://127.0.0.1/ramsar-restaurant",{
    autoIndex : true
})

export default connection;