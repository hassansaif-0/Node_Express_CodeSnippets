const express=require("express");

const app=express();

// app.use(express.static("C:/Users/user/Desktop/NODEJS/Express_Lect3_Serving/public"));
app.set("view engine","hbs")
//Follows the top down approach
app.get("/",(req,res)=>
{
    // res.send(req.body);
    res.send("Hello World")
  
})


app.get("",(req,res)=>{
    res.render("index",{name:"Saif"});
})



app.listen(8000,()=>
{});