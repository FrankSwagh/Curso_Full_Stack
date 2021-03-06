/* eslint-disable jest/require-hook */
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const personSchema = new mongoose.Schema({
    name: { type: String,
        minlength: 3,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
        minlength: 8,
        required: true,
        unique: true,
    },
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Person', personSchema)