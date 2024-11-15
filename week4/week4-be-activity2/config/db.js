const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Honestly, I don't see many problems with this. Maybe that the connection is hardcoded to localhost, 
// but I'm not sure if that is a big deal. Maybe the error handling could be improved, since
// now it just logs it to console and exits. Maybe throwing the error as a json-response would work?
 