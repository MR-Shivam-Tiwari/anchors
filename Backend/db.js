const mongoose = require("mongoose");

const uri =
  "mongodb+srv://shivamt2023:ft123shivam123@cluster0.lvfjzwr.mongodb.net/?retryWrites=true&w=majority";

const MongoDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB Atlas");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Disconnected from MongoDB Atlas");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    // Gracefully handle process termination
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("MongoDB connection closed due to application termination");
      process.exit(0);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
};

module.exports = MongoDB;

// Do not call MongoDB() here; it should be called in your server file when you start your server
