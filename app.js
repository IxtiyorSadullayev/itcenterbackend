const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')


// create app
const app = express()

// configs
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/upload',express.static('./upload'))

// connect db

mongoose.connect('mongodb://127.0.0.1:27017/itc')
    .then(()=> console.log(`Connect db`))
    .catch(e=> console.log(e.message))


// routes

app.use('/api/teacher/type', require('./routes/teacher_type.route'));
app.use('/api/teacher', require('./routes/teacher.router'));
app.use('/api/kurs/type', require('./routes/kurs_type.route'));
app.use('/api/group', require('./routes/group.route'));
app.use('/api/student', require('./routes/student.route'))
// not found error

app.use((req,res,next) =>{
    const er = new Error(`Not Found\nSite url: ` + req.url)
    er.status = 404;
    next(er);
})

app.use((err,req,res,next) =>{
    const error = err;
    res.status(error.status).json(error.message);
})


// port

const port  = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server started on port ${port}\nSite url http://localhost:${port}`));