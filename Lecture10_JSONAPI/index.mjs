import fetch from "node-fetch";
import http from "http"



            


const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.end("Hello from Home")
    }

    else if(req.url=="/userapi")
    {
        let userdata=""
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => 
    {
        console.log(json)
        console.log("Hello World")
        res.writeHead(200, { 'Content-Type': 'application/json' });
res.write(JSON.stringify(json));
res.end();
    }
        )

    }

    else if(req.url=="/contact")
    {
        res.end("Hello from contact")
    }

    else 
    {
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>PAGE NOT FOUND</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("Listening");
});