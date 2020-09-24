const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  imagelink: {
    type: String,
    require: true,
  },
  productname: {
    type: String,
    require: true,
  },
  productprice: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
