const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    accountNo: {
      type: Number,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

const VendorDetails = new mongoose.model("vendorDetails", vendorSchema);

module.exports = VendorDetails;
