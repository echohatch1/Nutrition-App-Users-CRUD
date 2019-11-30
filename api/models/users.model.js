'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    username: { type: String, lowercase: true, required: true, max: 100 },
    email: { type: String, lowercase: true, required: true, max: 100 },
    date: { type: Date, default: Date.now },
    foods: [{type: Object}],
    
},
{usePushEach: true}
);

module.exports = mongoose.model('Users', UsersSchema)