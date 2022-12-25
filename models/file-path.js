const mongoose = require('mongoose');


// moongoose Schema
const filePath = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
})

const FilePath = mongoose.model('FilePath', filePath);
module.exports = FilePath;