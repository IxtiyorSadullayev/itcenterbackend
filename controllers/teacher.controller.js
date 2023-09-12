const TeacherSchema = require('./../models/teacher.model')
const HistorySchema = require('./../models/history.model')

exports.addTeacher = async (req,res,next) =>{
    try {
        const {fullname, surname, birthday, teacher_type, order, rate} = req.body;
        const condidate = await TeacherSchema.findOne({fullname: fullname, surname: surname});
        if(condidate){
            return await res.status(400).json("Ushbu o'qituvchi allaqachon yaratilgan");
        }
        const newteacher = await TeacherSchema.create({fullname, surname, birthday, teacher_type, order, rate});
        await res.status(200).json(newteacher);
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getallTeacher = async (req,res,next) =>{
    try {
        const teachers = await TeacherSchema.find().populate("teacher_type");
        const ts = teachers.map((teacher, index) =>{
            return {
                tr: index+1,
                id: teacher._id,
                fullname: teacher.fullname, 
                surname: teacher.surname,
                birthday: teacher.birthday.toDateString(),
                teacher_type: teacher.teacher_type,
                order: teacher.order,
                rate: teacher.rate,
                createAt: teacher.createdAt,
                updateAt: teacher.updatedAt
            }
        })

        await res.status(200).json(ts);
    } catch (e) {
        await res.status(500).json(e.message)
    }
}


exports.getOne = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const condidate = await TeacherSchema.findById(id).populate('teacher_type');
        if(!condidate){
            return await res.status(404).json("Teacher not found");
        }
        await res.status(200).json({
            id: condidate._id,
            fullname: condidate.fullname,
            surname: condidate.surname,
            birthday: condidate.birthday.toLocaleDateString(),
            teacher_type: condidate.teacher_type,
            order: condidate.order,
            rate: condidate.rate
        });
    } catch (e) {
        await res.status(500).json(e.message)
    }
}


exports.updateOneTeacher = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const condidate = await TeacherSchema.findById(id);
        if (!condidate){
            return await res.status(404).json("Teacher not found");
        }
        await TeacherSchema.findByIdAndUpdate(id, req.body);
        await HistorySchema.create({
            user:'64d7597ff587c1b02701e11e',
            data: condidate,
            action: 'UPDATE'
        });
        await res.status(200).json('');
    } catch (e) {
        await res.status(500).json(e.message)
    }
}