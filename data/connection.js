const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connection is successful"))
  .catch((e) => console.log("Connection failed", e));

const db = mongoose.connection;
