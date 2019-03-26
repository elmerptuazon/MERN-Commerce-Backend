const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ShopDetails = new Schema({
  shop_file: {
    data: Buffer,
    type: String
  },
  shop_title: {
    type: String
  },
  shop_price: {
    type: String
  },
  shop_completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("ShopDetails", ShopDetails);
