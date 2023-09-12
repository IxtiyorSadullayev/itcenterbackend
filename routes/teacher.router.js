const { addTeacher, getallTeacher, getOne, updateOneTeacher } = require('../controllers/teacher.controller');

const router = require('express').Router()

// create router
// api/teacher/add
router.post('/add', addTeacher)

// get all teacher
// api/teacher/all
router.get('/all', getallTeacher)

// get one teacher
// api/teacher/get/:id
router.get('/get/:id', getOne);

// update one teacher data
// api/teacher/update/:id
router.patch('/update/:id', updateOneTeacher);
module.exports = router;