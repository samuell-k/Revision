const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv =   require('dotenv')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
dotenv.config()
const PORT = process.env.PORT || 5000;
CONNECTION = process.env.CONNECTION
// Student = require('./models/student')
const Teacher = require('./models/teacher')
const Student =  require('./models/students')


app.post('/api/add/teacher',(req,res)=>{
    console.log(req.body)
    const teacher = new Teacher({
        name:req.body.name,
        age:req.body.age

    })
    res.send("done")
    teacher.save()
})


const student = new Student({
name:"samuel",
age:60

})
app.get('/api/student',(req,res)=>{
    res.send(student)
})

student.save()

app.get('/api/students/data', async(req,res)=>{

    const student = await Student.find()
    res.send({"students data:":student})


})





















































const Connection = async ()=>{



try{
await mongoose.connect(CONNECTION)
console.log("connection successfully!!")

app.listen(PORT,()=>{
    console.log('app is listenig on:' +PORT)
})
}
catch(e){
    console.log(e.message)
}
}


Connection();













