const TasksControllers = require('../controllers/tasks');
const tasks = require('../models/tasks');
const router = require('express').Router();


//find all tasks
router.get('/', TasksControllers.index);

//create a task
router.post('/create', TasksControllers.create)

//update a task
router.get('/update/:id', TasksControllers.edit);
router.put('/update/:id', TasksControllers.update);

//delete a task
router.delete('/delete/:id', TasksControllers.delete)

module.exports = router;
