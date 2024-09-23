const mongoose = require('mongoose')


const studentScheam =  mongoose.Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model('students',studentScheam)