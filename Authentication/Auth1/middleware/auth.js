const express=require("express")
const jwt = require("jsonwebtoken")

const authmiddle = async(req,res,next)=>{
    const token= req.query.token
    if(!token){
        return res.send("no token provided")
    }
    try {
        jwt.verify(token, 'anshu', function(err, decoded) {
            // console.log(decoded.foo) // bar
            if(err){
               return res.send("user not autherised")
            }
            if(decoded){
                
                req.user=decoded
                next()
            }


          });
    } catch (error) {
        res.status(500).json("token not found")
    }
}

module.exports=authmiddle;