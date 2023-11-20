// const auth = require("../middelware/Authentication");
const { register,login,forgotpassword,resetpassword,wlcom, noRouteFound,sendOtp,verifyOtp, addgovschemes,getgovschemes} = require("../controllers/Authentication");

const router = require("express").Router();
router.post("/register",register);
router.post("/addgovschemes",addgovschemes);
router.get("/getgovschemes",getgovschemes);

// router.post("/sendotp",sendOtp);
router.post("/verifyOtp",verifyOtp);
router.post("/login",login);
// router.post("/forgotpassword",forgotpassword);
// router.post("/resetpassword/:token",resetpassword);
// router.get("/",auth,wlcom);
router.post("*",noRouteFound);



module.exports= router;