const express = require("express");
const app = express();
const {
  vendorDetails,
  vendorInformation,
  vendorDelete,
  vendorUpdate,
  vendorRecord,
} = require("./controller/vendorInfo");

const PORT = 4000;
app.use(express.json());
app.post("/", vendorDetails);

app.get("/", vendorInformation);

app.get("/:id", vendorRecord);

app.delete("/:id", vendorDelete);

app.patch("/:id", vendorUpdate);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});
