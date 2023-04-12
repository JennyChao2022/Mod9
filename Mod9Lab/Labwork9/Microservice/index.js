const express = require('express');
const router = require('./router');
const app=express();
const PORT=7000

app.use(express.json());



app.get('/',(req,res)=>{
    res.json({message: "micro-service"})
})

app.use('/api',router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});