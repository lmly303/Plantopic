const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    orderItem : [
        {
            listing: { type: Schema.Types.ObjectId, ref: "listing", required: true },
            quantity: { type: Number, default: 1 }
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
