const GroupSchema = require('./../models/group.model');
const HistorySchema = require('./../models/history.model');

exports.addGroup = async (req,res,next) =>{
    try {
        const {groupname, tagname, started, group_number, group_along, teacher} = req.body;
        console.log(group_number)
        const condidate = await GroupSchema.findOne({tagname: tagname, group_number: group_number});
        if(condidate){
            return await res.status(400).json("Bunday guruh yaratilgan")
        }
        const newgroup = await GroupSchema.create({
            groupname: groupname, tagname: tagname, started: started, group_number: group_number, group_along: group_along, teacher: teacher
        });

        await res.status(201).json(newgroup);
    } catch (e) {
        await res.status(500).json(e.message)
    }
}

exports.getallGroup = async (req,res,next) =>{
    try {
        const groups = await GroupSchema.find();
        const gr = groups.map((gr, index)=>{
            return {
                _id: gr._id,
                id: index+1,
                tagname: gr.tagname,
                group_along: gr.group_along,
                started: gr.started.toLocaleDateString()
            }
        })
        await res.status(200).json(gr)       
    } catch (e) {
        await res.status(500).json(e.message)
    }
}