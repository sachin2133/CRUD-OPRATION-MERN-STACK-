const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyparser=require("body-parser")
const dotenv=require("dotenv").config()
const port=process.env.PORT
const router=require("./routes/userRout")

require("./Dbconnection/Dbconnection")
const app=express()
app.use(bodyparser.json())
app.use(cors())


app.use("/api",router)
app.listen(port||4440,()=>{
    console.log(`server run on ${port}`);
    
})