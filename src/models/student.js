const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name:String,
    gender:String,
    email:String,
    age:Number
})


module.exports = mongoose.model('Student',studentSchema)