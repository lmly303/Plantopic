const listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError.js");



module.exports.index = async (req,res)=>{
    const allListings = await listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res)=>{
    try{ 
        res.render("listings/new.ejs");
    }
    catch(err){
        console.error(err);
        res.status(500).send("An error occurred while fetching listings.");
    }
};

module.exports.createNewForm = async (req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400, "Send valid data for listing");
    }
    let url = req.file.path;
    let filename=req.file.filename;
    const newPlant = new listing(req.body.listing);
    console.log(req.user);
    newPlant.owner = req.user._id;
    newPlant.image = {url,filename};
    await newPlant.save();
    req.flash("success", "New Plant Added in the Listing!");
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req,res)=>{
    const {id} = req.params;
    const plant = await listing.findById(id);
    if(!plant){
        req.flash("error", "Plant you are searching for is not available!"); 
        res.redirect("/listings");
    }
    else{
        res.render("listings/edit.ejs", {plant});
    }
}

module.exports.updateEditForm = async (req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(400, "Send valid data for listing");
    }
    let {id} = req.params;
    let list = await listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename=req.file.filename;
        list.image = {url,filename};
        await list.save();
    }
    
    req.flash("success", "Plant details edited successfully!");
    res.redirect(`/listings/${id}`);
};


module.exports.delete = async(req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success", "Plant deleted from listings succesfully!");
    res.redirect(`/listings`);   
    
};


module.exports.read = async (req,res)=>{
    const {id} = req.params;
    const plant = await listing.findById(id).populate({path: "reviews", populate: {path: "author"}});
    if(!plant){
        req.flash("error", "Plant you are searching for is not available!"); 
        res.redirect("/listings");
    }
    else{
        res.render("listings/show.ejs", {plant});
    }
    
}
