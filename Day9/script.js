

const { log } = require("console");
const express = require("express");
const { Stats } = require("fs");
// const fs = require("fs");
const fsPromise = require("fs/promises");
const { request } = require("http");
const app = express();
app.use(express.json());

// app.use((req,res,next)=>{
//   const time = new Date().toLocaleDateString();
//   fsPromise.appendFile('/.log.txt',req.url+'\n');
//   next();
// });

app.get("/api/products", async (req, res) => {
  // const data = fs.readFileSync('./data.json',"utf8");
  const data = await fsPromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(data).products;

  // res.json({
  //     status: 'success',
  //     result:arr.length,
  //     data:{
  //         products:arr
  //     }
  // });

  res.json({
    status: "success",
    results: arr.length,
    data: {
      products: arr,
    },
  });
});

app.post("/api/products", async (req, res) => {
  // console.log(Object.key(req));
  // console.log(req.body);
  const data = req.body;
  if (!data.price || !data.title) {
    res.json({
      status: "fail",
      message: "Title or price must be provided",
    });
    return;
  }
  // data.id =121;
  // console.log(data);
  const db = await fsPromise.readFile("./data.json", "utf8");
  const arr = JSON.parse(db);
  const len = arr.length;
  const newProduct = data;
  if (len == 0) {
    newProduct.id = 1;
  } else {
    // const newProduct = data;
    newProduct.id = arr[len - 1].id + 1;
  }
  arr.push(newProduct);
  fsPromise.writeFile("./data.json", JSON.stringify(arr));
  res.json({
    status: "success",
    results: 1,
    data: {
      newProduct: newProduct,
    },
  });
});

app.put("/api/products/:id", async (req, res) => {
  const arr = JSON.parse(await fsPromise.readFile("/.data.json", "utf8"));
  res.send("Work in progress..");
  const reqId = parseInt(req.params.id);
  const data = req.body;
  data.id = reqId;
  const newArr = arr.map((elem) => {
    if (elem.id == reqId) return data;
    else return elem;
  });
  fsPromise.writeFile("./data.json", JSON.stringify(newArr));
  res.json({
    Stats: "Success",
    results: 1,
    data: {
      newProduct: data,
    },
  });
  // console.log(req.params);
  // console.log(data);
});

app.delete("/api/products/:id", async (req, res) => {
  const reqId = parseInt(req.params.id);
  const arr = JSON.parse(await fsPromise.readFile("./data.json", "utf8"));
  const newArr = arr.filter((elem) => {
    if (elem.id == reqId) return false;
    else return true;
  });
  fsPromise.writeFile("./data.json", JSON.stringify(newArr));
  res.status(204);
  res.send({
    status: "Success",
    data: {
      newProduct: null,
    },
  });
});

app.listen(3000);
