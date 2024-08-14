const express=require("express")
const router=express.Router()
const bcrypt= require("bcryptjs")
const user=require("../model/user")

router.post("/register",async(req,res)=>{
    try {
        const newUser= new user(req.body);
        await newUser.save()
        res.status(200).send("user registration is successful")
    } catch (error) {
        res.status(404).send(`try again ${error}`)
    }
})

router.post("/login",async(rq,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports=router

