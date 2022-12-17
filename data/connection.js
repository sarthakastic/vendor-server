const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/vendor")
  .then(() => console.log("connection is successful"))
  .catch((e) => console.log("Connection failed", e));

const db = mongoose.connection;
