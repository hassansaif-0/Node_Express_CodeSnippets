//ADDING A MODULE FOR USE
const fs=require("fs");

//WRITING TO THE FILE IN SYNCHRONUS WAY
fs.writeFileSync("sampledata.txt","A LINE IS ADDED")

//APPENDING TO THE FILE
fs.appendFileSync("sampledata.txt","\n A NEW LINE APPENDED")

//READING FROM THE FILE  specifying the encoding else buffered data received
const data=fs.readFileSync("sampledata.txt","utf-8")
console.log(data);

//RENAMING A FILE
fs.renameSync("sampledata.txt","newname.txt");