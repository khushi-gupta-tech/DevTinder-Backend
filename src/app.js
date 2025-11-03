const express = require('express');

const app = express();

app.use("/user",(req,res)=>{
   res.send("HAJHAHAJA")
})
// this will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstname:"khushi",lastname:"gupta"})
})

app.post("/user",(req,res)=>{
   console.log("save data")
   res.send("Data Saved successfully")
})

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully")
})
// this will match all the http method API calls to /test
app.use("/test",(req,res)=>{
 res.send("hello Server")
})



app.listen(3000,()=>{
    console.log("Server is successfully listening")
});
