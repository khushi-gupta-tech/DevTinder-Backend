const express = require('express');

const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
  //  console.log(req.query);
    res.send({firstname:"khushi",lastname:"gupta"})
})


app.listen(3000,()=>{
    console.log("Server is successfully listening")
});
