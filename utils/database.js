const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kenzy:kawai777@cluster0.or1iflu.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

module.exports = connectDB;
