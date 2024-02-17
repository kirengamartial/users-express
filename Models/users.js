const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    First_name: String,
    Last_name: String,
    age: Number,
})

const User = new mongoose.model("User", userSchema)

module.exports = User