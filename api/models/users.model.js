'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    first: { type: String, lowercase: true, required: true, max: 100 },
    last: { type: String, lowercase: true, required: true, max: 100 },
    email: { type: String, lowercase: true, required: true, max: 100 },
    password: { type: String, required: true, max: 20 }
});

module.exports = mongoose.model('Users', UsersSchema)