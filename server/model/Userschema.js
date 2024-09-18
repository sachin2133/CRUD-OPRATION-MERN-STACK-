const { types } = require("@babel/core")
const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const model = mongoose.model("Users", userschema)
module.exports = model