const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn , isOwner} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});


router
.route("/")
//index listing
.get(wrapAsync(listingController.index))
// create route
.post(isLoggedIn,upload.single('listing[image]'), wrapAsync(listingController.createNewForm));



//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);


router
.route("/:id")
//update route
.put(isLoggedIn,isOwner,upload.single('listing[image]'), wrapAsync(listingController.updateEditForm))
//Delete route
.delete(isLoggedIn,isOwner, wrapAsync(listingController.delete))
//read listing
.get(wrapAsync(listingController.read));



//edit route
router.get("/:id/edit" ,isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;