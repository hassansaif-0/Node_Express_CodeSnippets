const fs=require("fs");
const data={
    name:"Hassan",
    sem:8,
    degree:"CS"
};



const JSONDATA=JSON.stringify(data);
fs.writeFile("sample.json",JSONDATA,(err)=>
{
    if(err)
    {
        console.log("Error Ocurred");
    }
});

fs.readFile("sample.json","utf-8",(err,data)=>
{
    const cdata=JSON.parse(data);
    for (i in cdata)
    {
        console.log(`key:${i}     val:${cdata[i]}`);
    }
})

