const mongoose = require('mongoose');

const connectMongoDb = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/seller');
    console.log('connected to mongoDb');   
}

module.exports = connectMongoDb;