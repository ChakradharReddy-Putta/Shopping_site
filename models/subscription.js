const { text } = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
