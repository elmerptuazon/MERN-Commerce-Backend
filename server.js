const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shopRoutes = express.Router();
const cors = require("cors");
const PORT = 4000;

let Shop = require("./shop.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/shop", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB Connected");
});

shopRoutes.route("/").get(function(req, res) {
  Shop.find(function(err, shop) {
    if (err) {
      console.log(err);
    } else {
      res.json(shop);
    }
  });
});

shopRoutes.route("/edit/profile").post(function(req, res) {
  let shop = new Shop(req.body);
  shop
    .save()
    .then(shop => {
      res.status(200).json({ shop: "item has been added" });
    })
    .catch(err => {
      res.status(400).send("shop item failed");
    });
});

app.use("/shop", shopRoutes);

app.listen(PORT, function() {
  console.log("Server Good");
});
