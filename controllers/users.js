const user = require("../models/user.js");


module.exports.renderSingupForm = (req,res) =>{
    res.render("users/signup.ejs");
};

module.exports.postSingupForm = async (req,res) =>{
    try{
        let {username,email,password} = req.body;
        const newUser = new user({email,username});

        const registerUser = await user.register(newUser,password);
        req.login(registerUser, (err)=>{
            if(err){
               return next(err);
            }
            req.flash("success", "Welcome to PLANTOPIC");
            res.redirect(`/listings`);
        });    
    }
    catch(err){
        req.flash("error", err.message);
        res.redirect(`/signup`);
    }
};

module.exports.renderSinginForm = (req,res) =>{
    res.render("users/login.ejs");
}

module.exports.postSinginForm = async (req,res) =>{
    req.flash("success", "Welcome back to PLANTOPIC");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}



module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success", "You are logged out successfully!");
        res.redirect("/listings");
    });
}