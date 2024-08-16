const express = require("express")
const router=express.Router();
const movie= require("../model/movie")
const authmiddle=require("../middleware/auth")


// GET all movies with filtering, sorting, and pagination
// router.get("/",async(req,res)=>{
//     const {title,rating,search , sortBy, page, limit}=req.query;
//     const query = {};
   
//     if (title) query.title = { $regex: title, $options: 'i' };

//     if (rating) query.rating = { $gte: parseInt(rating) };
   
//     try {  
//         const Movie = await movie.find(query)
//         res.status(200).send({
//             Movie
//         })
//     } catch (error) {
//         res.status(500).send('Server Error movie get');
//     }
// })


// get all movie 
router.get("/", authmiddle ,async(req,res)=>{


    try {
        const newmovie= await movie.find();
        res.status(200).send(newmovie)
    } catch (error) {
        res.status(500).send('Server Error');
        
    }
})

// get movie by id

// router.get("/:id",async(req,res)=>{
//     try {
//         const newmovie= await movie.findById(req.params.id);
//         res.status(200).send(newmovie)
//     } catch (error) {
//         res.status(500).send('Server Error');
//     }
// })

// post a new novie

// router.post('/post',async(req,res)=>{
//     try {
//         console.log("first")
//         const newmovie= new movie(req.body)
//         const Movie= await newmovie.save()
//         console.log(Movie)
//         res.status(201).send(Movie)
//         // console.log("its running")
//     } catch (error) {
        
//         res.status(500).send('Server Error');
//     }
// })

// update new movie

// router.patch("/:id",async(req,res)=>{
//     try {
//         const Movie = await movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
//         res.status(201).send(Movie)
//     } catch (error) {
        
//         res.status(500).send('Server Error');
//     }
// })


// delete new movie

// router.delete("/:id",async(req,res)=>{
//     try {
//         const Movie = await movie.findByIdAndDelete(req.params.id);
        
//         res.status(201).send(Movie)
//     } catch (error) {
        
//         res.status(500).send('Server Error');
//     }
// })


module.exports=router


