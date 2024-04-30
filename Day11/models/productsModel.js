const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
});

const productModel = mongoose.Model("Products", productSchema);
const testProduct = new productModel({
  name: "Tital Watch",
  price: 1500,
});

testProduct.save().then((res) => {
  console.log(res);
});
