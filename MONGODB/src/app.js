const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodedb",{})
.then(()=>{console.log("Connection Successful")})
.catch((err)=>{});


//Defining scheme for the document

const playList=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        genretype:String,
        author:String,
        active:Boolean,
        date:
        {
            type:Date,
            default:Date.now
        }
    }
);


//Defining the collection


const Playlist=new mongoose.model("Playlist",playList);


(async()=>
{
    const HipHop=new Playlist(
    {
        name:"Ageno",
        genretype:"hiphop",
        author:"Tj",
        active:true,
    })
    const val=await HipHop.save();

})();



