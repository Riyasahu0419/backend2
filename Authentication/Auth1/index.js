
const mongoose=require("mongoose")
const express = require("express")
const server = express()
const connection = require("./config/db")
const movieRout = require('./routes/movieRout')
const auth = require('./model/user')
require('dotenv').config()
server.use(express.json())

const PORT = process.env.PORT || 3000
server.use("/api", movieRout)
server.use("/user", auth)


const mongoURI = process.env.MONGODB_URI; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));



server.listen(PORT, async () => {
    try {
        await connection;
        console.log(`server is connecting to database ${PORT}`)

    } catch (error) {
        console.log(`server is not connected ${error}`)
    }

})