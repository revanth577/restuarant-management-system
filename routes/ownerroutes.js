const express=require("express")

const router=express.Router()
const controllers=require("../controllers/ownerController.js")


console.log("router")
router.route('/:lng/:lat/:distance').get(controllers.getNearRes)
router.route('/').post(controllers.CreateRestuarant)




module.exports=router

//17.456873, 78.426320  erraga
//16.652994, 81.739488  penugonda,andrapradesh
//17.451803, 78.502000 secunderabad,telangana