const mongoose = require('mongoose');

const highSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    lines: {
        type: Number,
        required: true
    },
    score : {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('High', highSchema, 'score');