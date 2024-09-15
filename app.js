if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./models/user.js");
const dbUrl = process.env.ATLASDB_URL

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const cartRouter = require("./routes/cart.js");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto : {
        secret: process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error",() => {
    console.log("ERROR in mongo session store", err);
});


const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    },
};


app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


app.get("/home" , (req,res)=>{
    res.render("navbar/home.ejs");
});

app.get("/caretips" , (req,res)=>{
    res.render("navbar/plantCare.ejs");
});

app.get("/contact" , (req,res)=>{
    res.render("navbar/contact.ejs");
});

app.post("/send-message" , (req,res)=>{
    req.flash("success", "Thanks for contacting us!");
    res.redirect("/home");
});

app.use(["/cart", "/listings/:listingid/cart"], cartRouter);

app.use("/listings",listingsRouter);

app.use("/listings/:id/reviews",reviewsRouter);

app.use("/", userRouter);


main()
.then(() =>{
    console.log("connected to database");
})
.catch((error) =>{
    console.log("error",error);
});

async function main(){
    await mongoose.connect(dbUrl);
}

app.all("*", (req,res,next) =>{
    next(new ExpressError(404,"Page Not Found"));
});

app.use((err,req,res,next) => {
    let {statusCode=500,message="Something went wrong"} = err;
    res.status(statusCode).send(message);
});

app.listen(8080,() => {
    console.log("app is listening");
});


