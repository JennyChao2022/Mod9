const express = require("express"); 
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes'); 

app.use(express.json());
app.use(express.urlencoded({extended:false}))

dbConnect.connectMysql();
app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});
app.use('/api/text', userRoutes)

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`)});
