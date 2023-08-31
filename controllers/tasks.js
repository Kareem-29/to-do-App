const Task = require('../models/tasks')

module.exports= {
//the operation to view data usually called index
    index: (req,res)=>{
        Task.find({}).then((tasks,error)=>{
            if(error) console.log(`error was found!!: ${error}`);
            else{
                //using res.render to load up an ejs view file
                res.render('todo.ejs', {todotask: tasks});
            }})
    },
    create: (req,res)=>{
        const firstTask= new Task({title: req.body.title});
        firstTask.save().then(()=>res.redirect("/"))
    },
    edit: (req,res)=>{
        const id =req.params.id
        Task.find({}).then((tasks, error)=>{
            res.render('todoEdit.ejs', {todotask:tasks, idTask:id})
    
        }) 
    },
    update: (req,res)=>{
        const id = req.params.id
        Task.findByIdAndUpdate(id, {title:req.body.title}).then((tasks,err)=>{
            if(err) return res.send(500,err)
            else res.redirect('/')
        })
    },
    delete: (req,res)=>{
        Task.deleteOne({_id: req.params.id}).then((tasks,error)=>{
            if(error) console.log(`error was found!!: ${error}`);
            else{
                res.redirect('/');
            }})
    }

}