// const fs = require('node:fs');
// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data.toString());



// const fs =require('fs');
// fs.writeFileSync('./logs.txt',"10 APRL 2024");



// const { log } = require('node:console');
// const fs = require('node:fs');
// console.log("Start");
// const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf8'});
// console.log(data);
// console.log("End");



//promises in file system
// const { log } = require('console');
// const fsPromise = require('fs/promises');
// console.log("Start");
// const pr = fsPromise.readFile('./myReadMe.txt',{encoding:'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
//     console.log("End");
// })
// // fsPromise();




//callback in file system
// const fs = require('fs');
//  fs.readFile('./myReadMe.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// });


// const fs = require('fs');//-->fs.resdFile, fs.redFileSync
// // fs.readFile('./myReadMe.txt',{encoding:"utf8"},(err,data)=>{
// //     console.log(data);
// const data = fs.readFile('./myReadMe.txt',{encoding:"utf8"},(err,data)=>{
//     console.log(data);
// })





//http://localhost:1400/
// const http = require('http');
// const app = http.createServer((req,res)=>{
//     console.log("Recieved!");
// });
// app.listen(1400);   



// "start": "nodemon script.js"


//http://localhost:1400/
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log('Request Reciver');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type':'text/html'
//     })
//     res.end('<h2>Hello!</h2>')
// });
// server.listen(1400,()=>{
//     console.log('............Server Start..........');
// });








// mini project
const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./data.json','utf8');
// console.log(data);
const dataObj = JSON.parse(data);
const products = dataObj.products;
// console.log(dataObj);

const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Day7</title>
        <style>
        body{
            background-color:yellow;
        }
        .product-card{
            max-width:500px;
            margin:20px auto;
            boder:3px double brown;
            boder-radius:08px;
            padding:16px;
        }
        
        </style>
    </head>
    <body>
        <h3>Product cards will be dynamically inserted here </h3>
    </body>
</html>
`;
const cardTemplate =`
<div class='product-card'>
<h4>_TITLE_</h4>
<p>_INFO_</p>
<p>__brand__</p>

<p>__category__</p>
<h1>_ID_</h1>
<img src="__img__">
<img src="__thub__">
<h4>__price</h4>
</div>
`;
// const card1 = cardTemplate.replace('__TITEL__',products[0].title)
//                           .replace('__INFO__',products[0]);
// const card2 = cardTemplate.replace('__TITEL__','Xiaomi Note 11 pro')
//                           .replace('__INFO__','Xiaomi Note 11 pro');
// const card3 = cardTemplate.replace('__TITEL__','Xiaomi Note 11 pro')
//                           .replace('__INFO__','Xiaomi Note 11 pro');
// const allCards = card1+card2+card3;
// const page = cardTemplate.replace('__TITEL__',card1);

// const cardTemplate =fs.readFileSync
const allCards =products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('_ID_',elem.id);
    newCard = newCard.replace('_TITLE_',elem.title);
    newCard = newCard.replace('_INFO_',elem.description);
    newCard = newCard.replace('__img__',elem.images[0]);
    newCard = newCard.replace('__price',elem.price);
    newCard = newCard.replace('__brand__',elem.brand);
    newCard = newCard.replace('__category__',elem.category);
    newCard = newCard.replace('__thub__',elem.thumbnail);
     
    return newCard;
});

const page =htmlTemplate.replace('Product cards will be dynamically inserted here', allCards);

// const page = '<h1>Welcome</h1>'
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.end(page)
});
server.listen(1400,()=>{
    console.log('............Server Start..........');
});






