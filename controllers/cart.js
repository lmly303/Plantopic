const listing = require("../models/listing.js");
const Cart = require("../models/cart.js");


module.exports.loadcart = async (req, res) => {
    const userId = req.user._id;
    let cart = await Cart.findOne({ owner: userId }).populate({
        path: 'orderItem.listing',
        select: 'name description image price' 
    });

    if (!cart) {
        cart = { orderItem: [] };
    }
    const totalPrice = cart.orderItem.reduce((total, item) => total + item.listing.price * item.quantity, 0);

    res.render("navbar/cart.ejs", { cart, totalPrice });
};


module.exports.updateCart = async (req, res) => {
    const { id, change } = req.body;
    const userId = req.user._id;
    const quantityChange = parseInt(change, 10);

    const cart = await Cart.findOne({ owner: userId });

    const itemIndex = cart.orderItem.findIndex(item => item.listing.equals(id));

    if (itemIndex === -1) {
        return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }

    cart.orderItem[itemIndex].quantity += quantityChange;

    if (cart.orderItem[itemIndex].quantity <= 0) {
        cart.orderItem.splice(itemIndex, 1);
    }

    await cart.save();

    res.redirect('/cart'); 
};


module.exports.addToCart = async (req, res) => {
    const { listingid } = req.params;
    const userId = req.user._id;

    const Listing = await listing.findById(listingid);
    if (!Listing) {
        req.flash("error", "Plant Not found");
        return res.redirect("/listings");
    }

    let cart = await Cart.findOne({ owner: userId });
    if (!cart) {
        cart = new Cart({ owner: userId, orderItem: [] });
    }

    const existingItem = cart.orderItem.find(item => item.listing.toString() === listingid);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.orderItem.push({ listing: listingid, quantity: 1 });
    }
    await cart.save();
    res.redirect(`/listings/${Listing._id}`);
};