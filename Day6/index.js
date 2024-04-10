// console.log('Start');
// setTimeout(()=>{console.log('Timeout..')},0)
// console.log('end');


// setTimeout(()=>{console.log('Timeout1..')
// },0)
// console.log('Start');
// setTimeout(()=>{console.log('Timeout2..')
// },0)
// console.log('intermediate')
// console.log('end');




//Promise
//createOrder ()

//makePayment()

// function createOrder(x,fn){
//     //2ms 4ms 500ms
//     console.log(x);
//     // makePayment();
//     setTimeout(()=>{fn('lik123')},10);
// }
// function makePayment(orderId){
//     console.log(orderId);
// }
// createOrder('soap',makePayment);
// makePayment()


// const pr = new Promise((resolve,reject) => {
//     //logic
//     if(true){
//         // resolve();
//         setTimeout(()=>{
//             resolve();
//         },100)
//     }else{
//         reject();
//     }
// });
// console.log(pr);



// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("done-123");   
//     }, 1000);
// });
// console.log(pr1);
// pr1.then((res)=>{
//     console.log(res);
// })




// const pr1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {reject("Some items are out of stock");}, 0);
// });

// setTimeout(()=>{console.log(('First timeout.....'));},0);
// console.log(pr1);
// pr1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })



// setTimeout(function obj(){
//     console.log('I an one');
// },0);
  
// const pr = new Promise((resolve,reject)=>{
//     setTimeout(() => {resolve("Done");}, 0);
// })

// pr.then(function b(resolve){
//     console.log("promise completed:",resolve);
// });
  
// setTimeout(function xyz(){
//     console.log('I am two');
// },0);           







//map function



// const arr = [12,23,43,32];

// const ans = arr.map((a)=>{
//     console.log(a);
// });
// console.log(ans);


// const arr = [12,23,43,32];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a*2;
// });
// const ans2 = arr.map(a=>a**2);
// console.log(ans);
// console.log(ans2);

// const arr = [10,22,34];
// const ans = arr.push(99);
// arr.push(99);
// console.log(arr);
// console.log(ans);


// const arr = [10,23,55,32];
// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })
// console.log(arr);
// console.log(ans);



// const arr =[
//     'Delhi','Chennai','Mumbai','Kolkata','Pune',
//     'India','Russia','Usa'
// ]
// const ans =arr.filter((a)=>{
//     if(a.includes('i') || a.includes('K')) {
//         return true;
//     }
//     else false;
// })
// console.log(ans);


// const arr =[
//     'Delhi','Chennai','Mumbai','Kolkata','Pune',
//     'India','Russia','Usa'
// ]
// const ans =arr.filter((a)=>{
//     const ns = a.toLowerCase();
//     if(ns.includes('india')) {
//         return true;
//     }
//     else {
//             return false;
//     }
// })
// console.log(ans);




//reduce 
// const arr = [2,4,6,8,10];
// const ans = arr.reduce((total,curr,c,d,e)=>{
//     console.log(total,curr,c,d,e);
//     return total+curr;

// });
// console.log(ans);



// const arr = ['ab','cd','xy','z'];
// const ans = arr.reduce((total,curr)=>{
//     console.log(total,curr);
//     return total+curr;

// });
// console.log(ans);
