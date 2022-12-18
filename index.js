const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

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

// const PATH = process.env.PORT;
const PORT = process.env.PORT || 8080;
console.log(process.env.PORT);
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
