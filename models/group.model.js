const mongoose = require('mongoose')

const Group_Schema = new mongoose.Schema({
    groupname: {type: mongoose.Schema.Types.ObjectId, ref: "Kurs_Type", required: true},
    tagname: {type: String, required: true, minlength: 3, maxlength: 30},
    started: {type: Date, required: true},
    group_number: {type: Number, required: true, unique: true},
    group_along: {type: Number, required: true},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true},
    finished: {type: Boolean, default: false},
    finished_date: {type:Date, default: null}
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', Group_Schema);