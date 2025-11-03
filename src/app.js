const express = require('express');

const app = express();

app.use("/user",[(req,res,next)=>{
    //Route Handler 1
 // res.send("Route Handler 1")
  next();
},(req,res)=>{
   res.send("Route Handler 2")
}])


app.listen(3000,()=>{
    console.log("Server is successfully listening")
});
