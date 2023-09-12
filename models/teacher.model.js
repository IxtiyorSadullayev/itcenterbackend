const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    fullname: {type: String, required: true, minlength: 3, maxlength: 25},
    surname: {type: String, required: true, minlength: 3, maxlength: 25},
    birthday: {type: Date, required: true,},
    teacher_type: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher_Type'},
    order: {type: Number, required: true},
    rate: {type: Number, required: true},
},
{
    timestamps: true,
})


module.exports = mongoose.model('Teacher', TeacherSchema);