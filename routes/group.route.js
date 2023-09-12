const { addGroup, getallGroup } = require('../controllers/group.controller');

const router = require('express').Router();

// create group router
// api/group/add
router.post('/add', addGroup)

// get all routes
// api/group/all
router.get('/all', getallGroup)

module.exports = router;