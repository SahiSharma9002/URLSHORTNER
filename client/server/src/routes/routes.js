import express from 'express';


 
import {  signup ,login ,sendotp } from "../controllers/Auth.js"
import { CreateUrl ,getallUrl ,DeleteUrl,GetUrl } from '../controllers/url.js';


//import middlewares
import { auth } from '../middlewares/auth.js';

//const {login , signup , sendotp} = require("../controllers/Auth.js")
const router = express.Router();


//creating URL
router.post("/createurl1" , auth,CreateUrl);
router.get("/getallurl" ,auth , getallUrl);
router.delete("/delete/:id",auth , DeleteUrl);
router.get("/geturl/:id",GetUrl );
//****************************** Authentication Routes**********//

//Route For UserLogin
router.post("/login" , login)
//Route for user Signup
router.post("/signup" , signup)

//Route for sending Otp to user's email
router.post("/sendotp", sendotp)





export default router;


