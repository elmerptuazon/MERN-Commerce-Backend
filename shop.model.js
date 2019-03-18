const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Shop = new Schema({
  shop_file: {
    type: Object
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

module.exports = mongoose.model("Shop", Shop);
