const mongoose = require('mongoose')

const Teacher_Type_Schema = new mongoose.Schema({
    teacher_type: {type: String, required: true, unique: true}
}, 
{
    timestamps: true
});


module.exports = mongoose.model('Teacher_Type', Teacher_Type_Schema);