const fs = require("fs");
const http = require("http");
const { title } = require("process");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(Objdata);

const inputElement =`
<form action='/product'>
<input type="text" name="productName">
<button>click</button>
</form>
`
const page = `<div class="grid-container">__PAGE__</div>
<style>
.grid-container{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:10px;
 }

</style>`;
const cardTemplate = `  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Day8</title>
  <style>
  h1{
    text-align: center;
  }
    .product-card {
        height: auto;
        background-color:bisque;
        max-width: 400px;
        padding: 24px;
        margin: 20px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);   
    }
    .product-card img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto 16px;
        border-radius: 8px;
    }
    
    
    h3 {
        text-decoration: underline;
        font-size: 40px;
    }
</style>
</head>
<body>
    <div class='product-card'>
        <h3>$TITLES</h3>
        <img src="$img_src5" alt='product-image' >
        <img src="$img_src5" alt='product-thumbnail' >
        <a href="$product_links">More info</a>
        <h4>Price:$_price_</h4>
    </div>
</body>
</html>`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = cardTemplate;
  // temp = temp.replace('id',dataObj[i].id);
  temp = temp.replace("_price_", dataObj[i].price);
  temp = temp.replace("$TITLES", dataObj[i].title);
  temp = temp.replace("$img_src5", dataObj[i].images[0]);
  temp = temp.replace("$img_src5", dataObj[i].thumbnail);
  temp = temp.replace("$product_links", `/product?id=${i}`);

  result.push(temp);
}
result = result.join(" ");

const ress = page.replace("__PAGE__", result);
// console.log(result);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // const route = req.url;
  // console.log(route);
  // const path = url.parse(req.url);
  // const pathname = path.pathname;
  const { pathname, query } = url.parse(req.url, true);
  console.log(query);
  // const path = url.parse(req.url).pathname
  // console.log(path);

  if (pathname == "/home") {
    // res.end(ress);
    res.end(inputElement+result);

  } else if (pathname == "/product") {
    // const id = query.id;
    // const id = q.id;

    const pName = query.productName;
    if(pName){
        const searchNameResults = dataObj.filter((elem)=>{
            if(elem.title.includes(pName)){
               return true;
            }
            else{
                false;
            }  
        })

        console.log(searchNameResults)
        // const items = dataObj[id];
           searchNameResults.map((item)=>{
            res.end(`
            <div>
                <h4>${item.title}</h4>
                <h4>${item.id}</h4>
                <h2>${item.price}</h2>
                <h2>${item.description}</h2>
                <img src="${item.thumbnail}" alt="asdf"></img>   
                Hello          
            </div>
        `);
           })
    }
    else{
        res.end('Error...')
    }


    // const productid = dataObj[id].title;
    // res.end(productid)
    
  } else {
    res.end("404... Not Found");
  }
  // res.end(result);
});

server.listen(2000, () => {
  console.log("....Server.....");
});
