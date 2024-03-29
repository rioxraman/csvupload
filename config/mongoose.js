require('dotenv').config()

// require mongoose
const mongoose = require('mongoose');

// connect mongoose 
// mongoose.connect(process.env.localdb);
mongoose.connect("mongodb://localhost/csvupload");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error in connecting to db"));

db.once('open', function () {
    console.log("connected to :: mongo db")
})

module.exports = db;