"use strict";
const Models = require("../models");
const getText = (res) => {
Models.Text.findAll({}).then(function (data) { res.send({result: 200 , data: data})
   }).catch(err => {
throw err    })
}

const createText = (req, res) => {

    const name = req.body.name
    const text=req.body.text

    Models.Text.create(req.body).then(()=>{
        if (name === "" || text === "") {
        res.send({result: 400, message: "Both name and text must be sent"})
    } else if (typeof  typeof(name) != typeof("") || typeof(text) != typeof("")){
        res.send({result: 400, message: '"Name and text must be a string"'})
    } else if ( name.length === 0 || name.length > 30) {
        res.send({result: 400, message:"name's length must be between 1 and 30 characters"})
    } else if ( text.length ===0 || text.length > 255) {
        res.send({result:400, message:"text's length must be between 1 and 255 characters"})
    } else {
        return('done')

    }}).then(res.send({result: 200, message: "Text successfully created"}))
 .catch(err => {
     throw err;
 })
}




module.exports = { getText, createText}


