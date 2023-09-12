const mongoose = require('mongoose')

const History_Schema = new mongoose.Schema({
    action: {type: String, enum: ['UPDATE', 'DELETE'], required: true,},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true},
    data: {type: Object, required: true}
}, 
{
    timestamps: true
});

module.exports = mongoose.model('History', History_Schema);