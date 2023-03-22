//ASYNC CALLS TAKE AN ADDITIONAL CALLBACKS TO BE EXECUTED ON SUCCESSFUL EXECUTION


//ADDING A MODULE FOR USE
const fs=require("fs");

//WRITING TO THE FILE IN SYNCHRONUS WAY
fs.writeFile("sampledata.txt","A LINE IS ADDED",(err)=>{console.log(err)});

//APPENDING TO THE FILE
fs.appendFile("sampledata.txt","\n A NEW LINE APPENDED",(err)=>{console.log(err)})

//READING FROM THE FILE  specifying the encoding else buffered data received
fs.readFile("sampledata.txt","utf-8",(err,data)=>{console.log(data)})

// //RENAMING A FILE
// fs.rename("sampledata.txt","newname.txt",(err)=>{console.log(err)});