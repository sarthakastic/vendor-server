const express = require("express");

require("../data/connection");

const vendorInfo = require("../models/vendor");

const app = express();

app.use(express.json());

async function vendorDetails(req, res) {
  try {
    const user = new vendorInfo(req.body);
    const saved = await user.save();
    res.status(200).send(saved);
  } catch (e) {
    res.send(e);
  }
}

async function vendorInformation(req, res) {
  try {
    const { page = 1, limit = 5 } = req.query;

    let user = await vendorInfo
      .find({})
      .limit(limit)
      .skip((page - 1) * limit);
    res.status(200).send(user);
  } catch (error) {
    console.error(err);
    return res.status(500).send(err);
  }
}

async function vendorDelete(req, res) {
  try {
    const deleteVendor = await vendorInfo.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteVendor);
  } catch (e) {
    res.status(500).send(e);
  }
}

async function vendorUpdate(req, res) {
  try {
    const updateVendor = await vendorInfo.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(updateVendor);
  } catch (e) {
    res.status(500).send(e);
  }
}

async function vendorRecord(req, res) {
  try {
    const updateVendor = await vendorInfo.findOne({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(updateVendor);
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = {
  vendorDetails,
  vendorInformation,
  vendorDelete,
  vendorUpdate,
  vendorRecord,
};
