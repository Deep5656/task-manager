

require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('62bd7cdaed2c8ccd0003dc61').then((user)=>{
    console.log(user)
    return Task.countDocuments({completed:true})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})