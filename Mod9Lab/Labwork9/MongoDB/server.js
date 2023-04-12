const express = require('express')//express 선언 
const app= express();//express 사용 
require('dotenv').config();//env파일에서 보안정보 가져옴 
const PORT=process.env.PORT//env 에서 port 정보 선언 

app.use(express.urlencoded())//html form 정보를 링크형태로 가져옴 
app.use(express.json())//json 파일형태로 패싱 
app.use(express.static('public'))//css나 js 파일(비동기적) 퍼블릭폴더에서 가져옴 
const path=require('path')//파일접근용이하게 하는 path
const bodyParser=require('body-parser')//html에 접근해 


const userRouter=require('./Routes/userRouter')

const dbConnect = require("./DB/dbconnections")

const loginRouter=require("./Routes/loginRouter")

app.use('/api/users',userRouter)
app.get('/',loginRouter)
app.get('/login',loginRouter)
app.post('/login',loginRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${PORT}`)
})