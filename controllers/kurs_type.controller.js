const KursTypeSchema = require('./../models/kurs_type.model');
const HistorySchema = require('./../models/history.model');


exports.addKursType = async (req,res,next) =>{
    try {
        const {kurs_name} = req.body;
        const condidate = await KursTypeSchema.findOne({kurs_name: kurs_name});
        if(condidate){
            return await res.status(400).json("Ushbu kurs oldin kiritilgan.");
        }
        const newkurs = await KursTypeSchema.create({kurs_name: kurs_name});
        await res.status(201).json(newkurs)
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getallKursType = async (req,res,next) =>{
    try {
        const kurslar = await KursTypeSchema.find()
        await res.status(200).json(kurslar)       
    } catch (e) {
        await res.status(500).json(e.message)
    }
}