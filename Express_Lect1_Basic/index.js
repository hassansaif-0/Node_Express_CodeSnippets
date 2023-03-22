let express=require("express");

let app=express();

app.get("/",(req,res)=>
{
    res.send("Hello from Home");
})
app.get("/hassan",(req,res)=>
{
    res.send("Hello from Hassan");
})

app.get("/about",(req,res)=>
{
    res.send("Hello from About");
})

app.listen(8000,()=>
{
    
})