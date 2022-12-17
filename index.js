const express = require("express");
const app = express();
const {
  vendorDetails,
  vendorInformation,
  vendorDelete,
  vendorUpdate,
  vendorRecord,
} = require("./controller/vendorInfo");

app.use(express.json());
app.post("/", vendorDetails);

app.get("/", vendorInformation);

app.get("/:id", vendorRecord);

app.delete("/:id", vendorDelete);

app.patch("/:id", vendorUpdate);

app.listen(`0.0.0.0:${process.env.PORT}`, () => {
  console.log(`App listening`);
});
