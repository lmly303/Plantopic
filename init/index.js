const mongoose = require("mongoose");
const initdata = require("./data.js");
const listing = require("../models/listing.js");

const database="mongodb://127.0.0.1:27017/plantopic";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log("error : ",err);
});

async function main(){
    mongoose.connect(database);
}

const initDB = async ()=>{
    await listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj, owner:"66e0675b1d7a0e2db6dc37b7"}));
    await listing.insertMany(initdata.data);
    console.log("data is inserted successfully");
}

initDB();