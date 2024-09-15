const listing = require("./models/listing.js");
const review = require("./models/review.js");


module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Oops!, you must be logged in to add a plant. Please Login."); 
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next) =>{
    let {id} = req.params;
    let Listing = await listing.findById(id);
    if(!Listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "Sorry! , You are not the Owner of the listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req,res,next) =>{
    let {id,reviewId} = req.params;
    let Review = await review.findById(reviewId);
    if(!Review.author.equals(res.locals.currUser._id)){
        req.flash("error", "Sorry! , You didn't created this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}