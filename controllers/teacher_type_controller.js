const Teacher_Type = require('./../models/teacher_type.model');
const HistoryModel = require('./../models/history.model');

exports.createTeacherType = async (req,res,next) =>{
    try {
        const {teacher_type} = req.body;
        const condidate = await Teacher_Type.findOne({teacher_type: teacher_type});
        if (condidate){
            return await res.status(400).json(`Bu turdagi kasb allaqachon yaratilgan`)
        }
        const newtype = await Teacher_Type.create({teacher_type: teacher_type});
        await res.status(201).json(newtype);
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getallTeacherType = async (req,res,next) =>{
    try {
        const getalltypes = await Teacher_Type.find();
        await res.status(200).json(getalltypes);
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.updateTeacherType = async (req,res,next) =>{
    try {

    } catch (e) {
        await res.status(500).json(e.message)
    }
}