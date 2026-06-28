const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅ Connected to MongoDB Atlas");
    })
    .catch((e) => console.log("❌ Error in db connection:", e));
};

module.exports = connectToDB;