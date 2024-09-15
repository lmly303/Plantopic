const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn } = require("../middleware.js");
const cartController = require("../controllers/cart.js");


router
.route("/")
.get(isLoggedIn,wrapAsync(cartController.loadcart))
.post(isLoggedIn, wrapAsync(cartController.addToCart));

router.patch("/update", wrapAsync(cartController.updateCart));





module.exports = router;