const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to mongoDB');
  } catch (error) {
    console.log(error, 'not-connected to mongoDB');
  }
};

module.exports = connectDB;
