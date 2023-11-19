const { Schema } = require('mongoose');
const mongoose = require('mongoose');





//employee schema
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary:String
})

const Employee = mongoose.model('Employee', schema)

module.exports = { Employee }