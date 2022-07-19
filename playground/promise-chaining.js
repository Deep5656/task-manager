
require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('62bd40bd0e2fe2292ff56a6d',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})