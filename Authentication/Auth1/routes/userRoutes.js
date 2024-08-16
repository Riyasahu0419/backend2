const express=require("express")
const router=express.Router()
const user=require("../model/user")
const jwt = require("jsonwebtoken")
const { route } = require("./movieRout")
const authmiddle = require("../middleware/auth")
const movie= require("../model/movie")

router.post("/register",async(req,res)=>{
    // const {}=req.body
    try {
        const newUser= new user(req.body);
        await newUser.save()
        res.status(200).json("user registration is successful")
    } catch (error) {
        res.status(404).json(`try again ${error}`)
    }
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const userModel=await user.findOne({email,password})
        if(!userModel){
            return res.json("user not found")
        }
        const token = jwt.sign({ userId: user._id }, "anshu", { expiresIn: '2h' });
        res.json({ msg: "Token received", token });
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`);
    }
})


router.get("/", authmiddle ,async(req,res)=>{
console.log(req.user,"token recieved")

    try {
        const newmovie= await movie.find();
        res.status(200).json(newmovie)
    } catch (error) {
        res.status(500).json('Server Error');
        
    }
})

module.exports=router

