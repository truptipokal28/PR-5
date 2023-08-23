const mongoose = require('mongoose');
const tableSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});
const Record = mongoose.model('Record', tableSchema);
module.exports = Record;