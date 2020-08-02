const owner=require("../models/ownerModel.js")


exports.getNearRes=async (req,res,next)=>{
    
    try{
        
        const {lat,lng,distance}=req.params;
        const km=distance*1/6378.1;
        
      
        const near=await owner.find({
            
            
            
                location:{
                    $geoWithin:{
                        $centerSphere:[[lat*1,lng*1],km]
                    }
                }
               
           
            
        })
        
         res.status(200).json({
         status:"success",
          results:near.length,
         data:{
           near
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

exports.CreateRestuarant=async (req,res,next)=>{
    
    try{
     const newOwner=await owner.create(req.body)
     
     
     res.status(200).json({
         status:"success",
         data:{
            newOwner
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



//17.453760, 78.425875