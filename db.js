const mongoose = require('mongoose');
require('dotenv').config();

var mongoURL = `mongodb+srv://${process.env.USER_MONGODB}:${process.env.USER_MONGODB_KEY}@cluster10.2yqt65k.mongodb.net/mern-rooms`

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var conection = mongoose.connection

conection.on(`error`, () => {
    console.error(`Mongo db connection error`)
})

conection.on(`connected`, () => {
    console.log(`Connected to Mongo`)
})

module.exports = mongoose