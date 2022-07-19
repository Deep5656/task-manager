
const add = (a,b)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(a+b);
      }, 2000);
    })
}
// addition using promise chaining...

add(5,6).then((sum)=>{
    console.log(sum)
    return add(sum,7)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})