const mongoose=require("mongoose")




const itemsSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"please provide name of the item"]
        
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:[true,'please provide the  price']
    },
    RId:{
        type:mongoose.Schema.ObjectId,
        ref:'owner',
        required:[true,"items must belong to specific restuarant"]
    },
    special:{
        type:Boolean,
        default:false
    },
    quantity:{
        type:Number,
        required:[true,"please provide the quantity of onwer specified"]
    }
    
})



const itemsModel=mongoose.model("Items",itemsSchema)



module.exports=itemsModel