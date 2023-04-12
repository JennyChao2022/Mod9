'use strict'

const Models=require('../Models')
const getUsers=(res)=>{
    
    Models.User.find({},{},{},(err,data)=>{

        if(err) throw err;
        res.send({result:200,data:data})
    })
}


const createUser=(data,res)=>{
    console.log(data)
    new Models.User(data).save((err,data)=>{
        if(err) throw err;
        res.send({result:200,data:data})
    })
}

module.exports={
    getUsers,createUser}
