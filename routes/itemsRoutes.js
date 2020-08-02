const express=require("express")

const router=express.Router()
const {createItem,getItems,UpdateItem,deleteItem}=require("../controllers/itemsController.js")




router.route('/:id').get(getItems).post(createItem)
router.route('/:rid/:id').patch(UpdateItem).delete(deleteItem)


module.exports=router