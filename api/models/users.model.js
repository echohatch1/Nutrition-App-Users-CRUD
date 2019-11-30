'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    first: { type: String, lowercase: true, required: true, max: 100 },
    last: { type: String, lowercase: true, required: true, max: 100 },
    email: { type: String, lowercase: true, required: true, max: 100 },
    time : { type : Date, default: Date.now },
    food: { type: Object },
});

module.exports = mongoose.model('Users', UsersSchema)