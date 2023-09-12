const StudentSchema = require('./../models/student.model');
const History = require('./../models/history.model');

exports.addStudent = async (req, res, next) =>{
    try {
        const {fullname,surname,fathername,passportseria,passportnumber,phone,birthday,gender, group } = req.body;
        const condidate = await StudentSchema.findOne({passportseria:passportseria,passportnumber: passportnumber})
        if(condidate){
            return await res.status(400).json("Bunday student allaqachon yaratilgan.")
        }
        const newstudent = await StudentSchema.create({
            fullname: fullname,
            surname: surname,
            fathername: fathername,
            passportseria: passportseria,
            passportnumber: passportnumber,
            phone: phone,
            birthday: birthday,
            gender: gender,
            group: group
        })

        await res.status(201).json(newstudent)
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getAllStudents = async (req, res, next) =>{
    try {
        const students = await StudentSchema.find().populate('group');
        const st = students.map((st, index) =>{
            return {
                _id: st._id,
                id: index+1,
                fullname: st.fullname,
                surname: st.surname,
                fathername: st.fathername,
                birthday: st.birthday.toLocaleDateString(),
                group: st.group.tagname
            }
        })
        await res.status(200).json(st)
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getOneStudent = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const condidate = await StudentSchema.findById(id).populate('group');
        if(!condidate)
        {
            return await res.status(404).json("Topilmadi.")
        }
        await res.status(200).json({
            surname: condidate.surname,
            fullname: condidate.fullname,
            fathername: condidate.fathername,
            birthday: condidate.birthday.toLocaleDateString(),
            gender: condidate.gender,
            passportseria: condidate.passportseria,
            passportnumber: condidate.passportnumber,
            phone: condidate.phone,
            group: condidate.group
        })
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.updateStudent =async (req,res,next)=>{
    try {
        const id = req.params.id;
        const condidate = await StudentSchema.findById(id);
        if(!condidate){
            return await res.status(404).json("Foydalanuvchi topilmadi.")
        }
        const updateduser = await StudentSchema.findByIdAndUpdate(id, req.body);
        
    } catch (e) {
        await res.status(e.message)
    }
}