const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/authDatabase');
    console.log('connected to mongoDB');
  } catch (error) {
    console.log(error, 'not-connected to mongoDB');
  }
};

module.exports = connectDB;
