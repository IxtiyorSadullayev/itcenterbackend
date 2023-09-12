const mongoose = require('mongoose')

const Kurs_Type_Schema = new mongoose.Schema({
    kurs_name: {type: String, required: true, unique: true, minlength: 3, maxlength: 30}
}, {
    timestamps: true
})

module.exports = mongoose.model("Kurs_Type", Kurs_Type_Schema);