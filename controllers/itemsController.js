const items=require("../models/itemsModel.js")
const owner=require("../models/ownerModel.js")


exports.createItem=async (req,res,next)=>{
    
    try{
        
        const own=await owner.findById(req.params.id)
        if(!own)
        {
            throw new Error("you cannot create item ")
        }
        req.body.RId=req.params.id
        const itemNew=await items.create(req.body);
        
        
         res.status(200).json({
        status:"succes",
        data:{
            itemNew
        }
    })
    }
    catch(e)
    {
         res.status(400).json({
        status:"fail",
        message:e.message
    })
    }
    
   
}

exports.getItems=async (req,res,next)=>{
    
    try{
        const allItems=await items.find({RId:req.params.id})
        
        
        
         res.status(200).json({
        status:"succes",
        data:{
           allItems
        }
    })
    }
    catch(e)
    {
         res.status(400).json({
        status:"fail",
        message:e.message
    })
    }
    
    
}

exports.UpdateItem=async (req,res,next)=>{
    
        try{
            if(req.body.RId)
            {
                throw new Error("you cannot update the item")
            }
        const own=await owner.findById(req.params.rid)
        if(!own)
        {
            throw new Error("you cannot update the item")
        }
        const updated=await items.findByIdAndUpdate({_id:req.params.id},req.body)
        
        
        
        
        
         res.status(202).json({
        status:"succes",
        data:{
           updated
        }
    })
    }
    catch(e)
    {
         res.status(400).json({
        status:"fail",
        message:e.message
    })
    }
    
    
}


exports.deleteItem=async (req,res,next)=>{
    
     
    try{
        const own=await owner.findById(req.params.rid)
        if(!own)
        {
            throw new Error("you cannot update the item")
        }
        
        const deleted=await items.findByIdAndDelete(req.params.id)
        if(!deleted)
        {
            throw new Error("you cannot delete the item")
        }
        
        
         res.status(200).json({
        status:"succes",
        message:"deleted"
        })
    }

    
    catch(e)
    {
         res.status(400).json({
        status:"fail",
        message:e.message
    })
    }
    
    
    
    
}

