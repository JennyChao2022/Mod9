'use strict'
const Mongoose=require('mongoose')

const MongooseOptions={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const URI=process.env.DB_URI



Mongoose.connect(URI,MongooseOptions,function(err){
    if (err){
        console.log("DB Error:",err)
        process.exit(1);
    }else {
        console.log("MongoDB Connected")
    }
})




const db=Mongoose.connection;

db.on('error',console.error.bind(console,"mongo db error"))

exports.Mongoose=Mongoose;