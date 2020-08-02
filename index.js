const express=require("express")
const app=express()
require("./db/mongo.js")
app.use(express.json())
const ownerRoutes=require("./routes/ownerroutes.js")
const itemsRoutes=require("./routes/itemsRoutes.js")

app.use('/api/restuarant',ownerRoutes)
app.use('/api/restuarant/item',itemsRoutes)
app.listen(3000,()=>{
    console.log("server is running on 3000")
})
