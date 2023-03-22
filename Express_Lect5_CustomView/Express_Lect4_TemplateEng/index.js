const express=require("express");
const path=require("path")
const app=express();

// app.use(express.static("C:/Users/user/Desktop/NODEJS/Express_Lect3_Serving/public"));
const statpath=path.join(__dirname+"/template");
console.log(statpath);
app.set("view engine","hbs")
app.set("views",statpath);
//Follows the top down approach

app.get("",(req,res)=>{
    res.render("index",{name:"Saif"});
})

app.get("/",(req,res)=>
{
    res.send(req.body);
    res.send("Hello World")
  
})

app.listen(8000,()=>
{});