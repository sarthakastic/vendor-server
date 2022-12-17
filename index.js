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

const PATH = `0.0.0.0:${process.env.PORT}`;

app.listen(PATH, () => {
  console.log(`App listening on ${PATH}`);
});
