const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
})


// const me = new User({
//     name:'Deepanshu KAtiyar',
//     age:20,
//     email:'deepanshu@email.com',
//     password:'pass1234'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((err)=>{console.log(err)})