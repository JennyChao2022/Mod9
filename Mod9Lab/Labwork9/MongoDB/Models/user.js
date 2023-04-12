//각종 스키마들


const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const user = new Schema({

    firstName:{type: String,trim:true,required:true},
    lastName:{type: String,trim:true,required:true},
    emailId:{type: String,trim:true,required:true,unique:true},
    password:{type: String},
    creatAt:{type: Date,default:Date.now},
    updateAt:{type: Date,default:Date.now}
})
//user라는 이름으로 user모델을 내보냄 
module.exports=mongoose.model('user',user)
