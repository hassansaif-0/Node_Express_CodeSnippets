const express=require("express");

const app=express();

// app.use(express.static("C:/Users/user/Desktop/NODEJS/Express_Lect3_Serving/public"));
app.get("/",(req,res)=>
{
    res.send(req.body);
    res.send("Hello World")
  
})

app.listen(8000,()=>
{});