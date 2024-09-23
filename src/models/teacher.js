const mongoose  =  require('mongoose')

const teacherSchema  =  mongoose.Schema({

name:String,
age:Number
})

module.exports = mongoose.model('customer',teacherSchema)
