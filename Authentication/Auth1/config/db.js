// const mongoose= require("mongoose")
// const connection=mongoose.connect("mongodb://localhost:27017/Auth_1")
//  const connection =   mongoose.connect(process.env.MONGODB_URI);
require('dotenv').config()
 
// config/db.js
const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connection;
