const axios=require('axios')

const microApi=((req,res)=>{
    axios
    .get("https://catfact.ninja/facts")
    .then((result)=>res.send(result.data))
    .then(err=>console.log(err))
}  )

module.exports={
    microApi
}