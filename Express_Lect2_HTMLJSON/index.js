let express=require("express");

let app=express();

app.get("/",(req,res)=>
{
    res.send({name:"hassan",age:23});
})


app.listen(8000,()=>
{
    
})