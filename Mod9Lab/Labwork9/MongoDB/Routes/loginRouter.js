const express= require("express");

const bodyParser=require('body-parser')
const router=express.Router();
const path=require('path')     
// router.use(express.static('public'))

router.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,"../index.html"))

})

router.get('/login',(req,res)=>{

    res.sendFile(path.join(__dirname,"../index.html"))

})

router.post('/login',(req,res)=>{
    res.send("working")
    console.log(req.body.id)
    console.log(req.body.pw)    
})

module.exports = router;
