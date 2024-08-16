
const mongoose=require("mongoose")
const express = require("express")
const server = express()
const connection = require("./config/db")
const movieRout = require('./routes/movieRout')
const userRout = require('./routes/userRoutes')
require('dotenv').config()
server.use(express.json())

const PORT = process.env.PORT || 5000
server.use("/api", movieRout)
server.use("/user", userRout)





server.listen(5000, async () => {
    try {
        await connection();
        console.log(`server is connecting to database ${PORT}`)

    } catch (error) {
        console.log(`server is not connected ${error}`)
    }

})