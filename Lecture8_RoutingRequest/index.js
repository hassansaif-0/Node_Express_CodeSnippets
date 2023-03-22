var http=require("http")

const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.end("Hello from Home")
    }

    else if(req.url=="/about")
    {
        res.end("Hello from about")
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