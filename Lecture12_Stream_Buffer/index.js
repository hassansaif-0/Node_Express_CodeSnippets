const fs=require("fs")
const http=require("http")


const server=http.createServer();

server.on("request",(req,res)=>
{

    const fr=fs.createReadStream("sample.txt");

    fr.on("data",(chunk)=>
        {
            res.end(chunk);
        });
    fr.on("end",()=>
    {
        res.end("File Read");
    });

    fr.on("error",(err)=>
    {
        res.end( res.end);
    });


});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("Listening");
})