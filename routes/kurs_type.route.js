const { addKursType, getallKursType } = require('../controllers/kurs_type.controller');

const router = require('express').Router()

// create kurs 
// api/kurs/type/add
router.post('/add', addKursType)

// get all kurs
// api/kurs/type/all
router.get('/all', getallKursType);
module.exports = router;