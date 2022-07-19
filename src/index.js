const express = require('express')
require('./db/mongoose')
const User = require('./models/user')//exporting user model
const Task = require('./models/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
//automatically parse JSON to an object


// resourse ceration endpoints....

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(400).send(err)
    })

    // console.log(req.body);
    // res.send('testing...')
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((err) => {
        res.status(400).send(err)
    })
})


// resourse reading endpoints....

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) { return res.status(404).send() }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((e) => {
        res.send(e)
    })
})


app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) { return res.status(404).send() }
        res.send(task)
    }).catch((e) => {
        res.status(500).send()
    })
})

// resource updating endpoint...

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','age','email','password']
    const isvalidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    }) 
    if(!isvalidOperation){
        return res.status(400).send({error:'Invalid updates!'})
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body , { new: true, runValidator: true })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        return res.status(400).send(e)
    }
})

app.patch('/tasks/:id', async (req,res)=>{
    const allowedTask = ['description','completed']
    const updates = Object.keys(req.body)
    const isvalidOperation = updates.every((update)=>{
        return allowedTask.includes(update)
    })
    if(!isvalidOperation){
        return res.status(400).send({error:'Invalid task!'})
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidator:true})
        if(!task){
         return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        return res.status(400).send(e)
    }
      
})



app.listen(port, () => {
    console.log('Server is running on port ' + port);
})
