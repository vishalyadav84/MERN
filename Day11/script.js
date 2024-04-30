const express = require("express");
const productsRouter = require("./routes/productsRoutes.js");
const mongoose = require("mongoose");
const app = express();
const test = require("./routes/productsRoutes.js");

app.use("/api/products", productsRouter);
const url =
  "mongodb+srv://$_USERNAME_$:$_password_$@cluster0.cxrfqap.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority";
const databaseUser = "vishal_ydv88";
const databasePassword = "Vish1234";
const databaseName = "MERN3";

let dbLink = url
  .replace("$_USERNAME_$", databaseUser)
  .replace("$_password_$", databasePassword)
  .replace("$_DB_NAME_$", databaseName);

mongoose
  .connect(dbLink)
  .then(() => console.log("............Database Connected!............"));

app.listen(3000, () => console.log(".........App started......."));
