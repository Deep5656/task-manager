//CRUD operations...

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const objectID = mongodb.objectID;

// object destruturing...
const { MongoClient, ObjectID, ObjectId } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId()
console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Error');
    }
    console.log('connected');

    const db = client.db(databaseName);

    // for creating....

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Complete the MERN',
    //         completed:false
    //     },
    //     {
    //         description:"clean your house",
    //         completed:true
    //     },
    //     {
    //         description:"clean your mouth",
    //         completed:false
    //     }
    // ],(err,result)=>{
    //     if(err){
    //         return console.log('error');
    //     }
    //     console.log(result.ops);
    // })

    // for reading ....

    // db.collection('tasks').findOne({_id:new ObjectId("62bc1768e25096cec4005741")},(err,task)=>{
    //     console.log(task);
    // })
    // db.collection('tasks').find({completed:false}).toArray((err,tasks)=>{
    //     console.log(tasks);
    // })
    // db.collection('users').find({age:23}).count((err,count)=>{
    //     console.log(count);
    // })

    // for updateing.....

    // db.collection('users').updateOne(
    //     {
    //         _id: new ObjectId("62bc09accac8252fa171166e"),
    //     },
    //     {
    //         $set: {
    //             name: 'Aman Katiyar'
    //         }
    //     }).then((result) => {
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     })


        // db.collection('tasks').updateMany({
        //     completed:false
        // },
        // {
        //     $set:{
        //         completed:true
        //     }
        // }).then((result)=>{
        //     console.log(result);
        // }).catch((err)=>{
        //     console.log(err);
        // })


        // for deleting documents....
        
        // db.collection('users').deleteOne({
        //     age:24
        // }).then((result)=>{
        //     console.log(result);
        // }).catch((err)=>{
        //     console.log(err);
        // })
})