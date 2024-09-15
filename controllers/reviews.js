const listing = require("../models/listing.js");
const Review = require("../models/review.js");


module.exports.createReview = async(req,res)=>{
    let currentListing = await listing.findById(req.params.id);
    let newReview = new Review({
        comment: req.body.review.comment,
        rating: req.body.review.rating
    });
    newReview.author = req.user._id;

    currentListing.reviews.push(newReview);
    console.log(newReview);
    await newReview.save();
    await currentListing.save();
    
    req.flash("success", "Thanks for the Review!");
    res.redirect(`/listings/${currentListing._id}`);
};


module.exports.deleteReview = async (req,res)=>{
    let {id,reviewId} = req.params;

    await listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Your Review has been deleted Successfully!");
    res.redirect(`/listings/${id}`);
};