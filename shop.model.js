const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShopDetails = require("./shopdetails.model").model("ShopDetails");

let Shop = new Schema({
  shop_username: {
    type: String
  },
  shop_password: {
    type: String
  }
});

module.exports = mongoose.model("Shop", Shop);
