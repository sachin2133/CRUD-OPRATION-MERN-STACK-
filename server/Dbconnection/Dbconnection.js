const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connection=mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("db connected success");
    
}).catch((err)=>{
    console.log("db not connected",err);
    
})
module.exports=connection