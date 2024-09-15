const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    sunlight: {
        type: String,
        enum: ['Full Sun', 'Partial Sun', 'Shade'], 
        required: true
    },
    waterNeeds: {
        type: String,
        enum: ['Low', 'Medium', 'High'], 
        required: true
    },
    soilType: {
        type: String,
        required: true,
        trim: true
    },
    bloomTime: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner : 
        {
            type : Schema.Types.ObjectId,
            ref : "User"
        }
})

listingSchema.post("findOneAndDelete", async (listing) =>{
    if(listing){
        await Review.deleteMany({_id: {$in : listing.reviews}});
    }
});

const listing = mongoose.model("listing",listingSchema);

module.exports = listing;