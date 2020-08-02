const mongoose=require("mongoose")




const ownerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please provide the restuarant name"]
        
    },
    mobileNumber:{
        type:Number,
        required:[true,"please provide the mobile number of owner of restuarant"],
        unique:true,
        validate:{
            validator:function(val)
            {
                if( String(val).length===10)
                {
                    return true
                }
                return false
            },
            message:"please provide valid mobile number"
        }
    },
    email:{
        type:String,
        required:[true,"please provide the email address"]
    },
    state:{
        type:String,
        required:[true,"please provide the state name"]
    },
    city:{
        type:String,
        required:[true,"please provide the city name"]
    },
    pincode:{
        type:Number,
        required:[true,"plese provide the pincode details"],
        validate:{
            validator:function(val)
            {
                if(String(val).length===5)
                {
                    return true
                }
                return false
                
            },
            message:"please provide correct zip code"
        }
    },
    location: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point']
      },
      coordinates: [Number],
      address: String,
      description: String
    },
})

ownerSchema.index({ location: '2dsphere' })


const ownerModel=mongoose.model("owner",ownerSchema)



module.exports=ownerModel



