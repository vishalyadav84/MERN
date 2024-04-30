const express = require("express");
const productsController = require("../controlles/productsController.js");
const productRouter = express.Router();

productRouter.route("/").get(productsController.getAllProducts);

module.exports = productRouter;
