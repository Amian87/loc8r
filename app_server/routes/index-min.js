var express=require("express"),router=express.Router(),ctrlMain=require("../controllers/main");router.get("/",ctrlMain.index),module.exports=router;