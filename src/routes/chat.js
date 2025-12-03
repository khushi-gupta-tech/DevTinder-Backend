const express = require("express")

const chatRouter = express.Router();

chatRouter.post("/chat", async (req,res)=>{
   try{
     const {userId,targetUserId} = req.body;
     
   }catch(err){
     console.log(err)
   }
})

module.exports= chatRouter;