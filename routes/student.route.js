const { addStudent, getAllStudents, getOneStudent } = require('../controllers/student.controller');

const router = require('express').Router()

// create student
// api/student/add
router.post('/add',addStudent )

// get all students
// api/student/all
router.get('/all', getAllStudents)

// get one student
// api/student/id
router.get('/:id', getOneStudent);



module.exports = router;