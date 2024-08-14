const mongoose=require("mongoose")
const movieSchema=mongoose.Schema({

title: { type: String, required: true },
director: String,
actors: [String],
rating: Number

},{versionKey:false
    
})

const moviemodel=mongoose.model("Movie",movieSchema)

module.exports=moviemodel