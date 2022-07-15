const express = require('express')
const router =express.Router()
const {createNewEntry,getAllEntries,createNewBlock}=require('../controllers/workoutController')


// get all users
router.get('/users',getAllEntries)
// get a post blog
router.post('/v1/post/',)
// post a 
router.post('/users',createNewEntry)
// delete a  workout
module.exports=router;