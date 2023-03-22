
//Pipes connect a readable stream to a writable stream
const fs=require("fs")

const http=require("http");

const server=http.createServer((req,res)=>
{
    const rs=fs.createReadStream("sample.txt");
rs.pipe(res);
})

server.listen(8000,"127.0.0.1",()=>
{
    console.log("Listening");
})