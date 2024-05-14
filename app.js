const express = require("express");
const app = express();
const mongoose = require("mongoose");  
const Listing = require("./models/listing.js");

const Mongo_URL = "mongodb://127.0.0.1:27017/WanderLust";

main().then(() =>{
    console.log("Connected to DB");
}).catch((err)=> {
    console.log(err);
});


async function main(){
    await mongoose.connect(Mongo_URL);
}


app.get("/", (req,res)=>{
    res.send("Hi, I am Root");
});


app.get("/testListing",async (req,res) =>{
let sampleListing = new Listing({
    title: "My house",
    description: "By the Beach",
    price: 1000,
    location: "Nagpur",
    country: "India",
});
await sampleListing.save();
console.log("sample was saved");
res.send("Succesful Testing");
});

app.listen(8080, () => {
console.log("Server is here");
});