const mongoose = require('mongoose')

const Student_Schema = new mongoose.Schema({
    fullname: {type: String, required: true, minlength:3, maxlength: 25},
    surname: {type: String, required: true, minlength:3, maxlength: 25},
    fathername: {type: String, required: true, minlength:3, maxlength: 25},
    passportseria: {type: String, required: true, minlength:2, maxlength: 4},
    passportnumber: {type: String, required: true},
    phone: {type: String, required: true},
    birthday: {type: Date, required: true},
    gender: {type: String, required: true, enum: ["Erkak", "Ayol"]},
    group: {type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true}
},
{
    timestamps: true
})

module.exports = mongoose.model("Student", Student_Schema)