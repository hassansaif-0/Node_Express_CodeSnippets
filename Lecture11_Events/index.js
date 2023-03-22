const EventEmitter=require("events");
const http=require("http");
const event=new EventEmitter();

event.on("scream",(val1,val2,val3)=>
{
    console.log(val1);
    console.log(val2);
    console.log(val3);


    console.log("Event Fired")
});
const server=http.createServer((req,res)=>
{
    res.end("Hello from server");
    if(req.url=="/hassan")
    {
              event.emit("scream",200,"ok",300);
    }

});

server.listen(8000,"127.0.0.1",()=>
{
    console.log("Listening");
});


