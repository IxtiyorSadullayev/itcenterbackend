const { createTeacherType, getallTeacherType } = require('../controllers/teacher_type_controller');

const router = require('express').Router()

// register teacher type
// api/teacher/type/add
router.post('/add', createTeacherType)


// get teacher types

// api/teacher/type/getall
router.get('/getall', getallTeacherType)



module.exports = router;