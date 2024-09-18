const express=require("express")
const router=express.Router()
const usercontroler=require("../Controllers/Usercontrollers")

router.post("/create",usercontroler.create)
router.get("/getdata",usercontroler.Getalldata)
router.get("/getone/:id",usercontroler.getone)
router.put("/update/:id",usercontroler.update)
router.delete("/delete/:id",usercontroler.delete)
module.exports=router