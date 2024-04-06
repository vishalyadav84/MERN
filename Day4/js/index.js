
// let a= new String("hello");
// let b= "hello";
//  if(a==b){
//     console.log("yes");
//  }
//  else{
//     console.log("no");
//  }


// const obj={
//     name:'Vishal',
//     lastName:'Yadav',
// }
// console.log(obj);
// document.write(obj);




// const obj={
//         "name":"Vishal",
//         "lastName":"Yadav",
//     }

//     obj.age=20;
//  console.log(obj);






//Array
// let arr = [1,2,34];
// arr = [2,3,4];
// console.log(arr);

// let arr = [1,2,34];
// arr  [10]=20;
// console.log(arr);



// const obj ={
//     "name":"Vishal",
//     "lastName":"Yadav"
// }
// const arr = [1,2,34];
// arr  [2]=20;
// console.log(typeof(obj))
// console.log(typeof(arr))

// const obj ={
//     "name":"Vishal",
//     "lastName":"Yadav"
// }
// const arr = [1,2,34];
// arr  [2]=20;
// console.log(Array.isArray(obj))
// console.log(Array.isArray(arr))





// const arr =[1,2,3,4];
// arr[5]=20;
// const obj={
//     "name":"vishal",
// }
// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))





//checkIfObject{[1,2,3,4]}
//checkIfObject({name":":Vishal"})

// function checkIfObject(x){
//     if(Array.isArray(x)){
//         console.log(" Not object");
//     }
//     else  if(typeof(x)=="object"){
//         console.log("object");
//     }
//     else{
//         console.log("not object");
//     }
// }
// checkIfObject([]);



// const arr =['name',2];
// const obj ={
//     'name':'vishal',age:20;
// }
// for (let i=0;i<4;i++){
//     console.log(i);
// }


// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)


// window.console.log(window)
// window.console.log(innerHeight)
// window.console.log(innerWidth)


// console.log(window.document)
// console.log(window)


// console .log(console)


// const res =document.getElementsByTagName('h3')
// console.log(res)


// const res=
// decoment.getElementById('t1')
// console.log(res)



// const rec = document.querySelectorAll('div>h3');
// console.log(rec)

// const res = document.getElementById("div");
// console.log(res)
// res['innerText']="hello,word";
// console.log(res)

// const ne=document.createElement("h3")
// ne.innerText="Dynamic Text";
// // console.log(ne)
// document.body.appendChild(ne);

// const ne=document.createElement("h3")
// ne.innerText="Dynamic Text";
// // console.log(ne)
// const firstDiv =document.getElementsByTagName(0)
// firstDiv[0].appendChild(ne);


// function myFunction() {
//     const list = document.getElementById("t3");
//     list.removeChild(list.firstElementChild);
// }



// const div=document.querySelector('div');
// console.log(div)
// div.innerHTML="<p>Hello</p>";




// const res = document.querySelector('div');
// console.log(res);
// res.remove();
// res.removeChild('t1');






// const res = document.querySelector('div');
// // const c=document.querySelector ('p');
// // const c= document.querySelector('p:nth-of-type(3)')
// const c= document.querySelector('p:nth-of-type(3)')
// res.removeChild(c);




// const res = document.querySelector('div');
// const c=document.getElementById ('t2');
// res.removeEventListener(c);

//  function getInfo(){
//     // console.log("btn Clicked")
    
//  const d=document.querySelector(div)
//  const el =document.querySelector(getInfo)
//  el.innerText="my name is vishal"
//  }

// function getInfo (e){
//     console.log(e);
//     e.targat.style.bacground.red;
// }




// const firstNameChange =()=>link

// const firstNameChange =(e)=>{
//     console.log(e.targat.value);

// }




// const firstNameChange =(e)=>{
//     const val=e.target.value;
//     if(val.length>3){
//         console.log('correct');
//     }
// }


// function submitForm(e){
//     e.preventDefault();
//     console.log(e);

// }


// function submitForm(e){
//     e.preventDefault();
//     // console.dir(e.target.value);
//     const t=e.target
//     for(let i=0;i<2;i++){
//         console.dir(t[i].value);

//     }

// }


//check function
// function submitForm(e){
//     e.preventDefault();
//     // console.dir(e.target.value);
//     const t=e.target
//     for(let i=0;i<t.length;i++){
//         console.log(t[i].value)
//         console.log(t[i].type)

//     //    const t =t e.target

//     }

// }



//check box
// function submitForm(e){
//     e.preventDefault();
//     // console.dir(e.target.value);
//     const t=e.target
//     for(let i=0;i<t.length;i++){
//        const ty =t[i].type;
//        const vl=t[i].value;
//        console.log(ty,vl);
//        if(ty=='checkbox'){
//         console.log(t[i].checked)
//        }

//     //    const t =t e.target

//     }

// }





// function submitForm(e){
//         e.preventDefault();
//         // console.dir(e.target.value);
//         const t=e.target
//         for(let i=0;i<t.length;i++){
//            const ty =t[i].type;
//            const vl=t[i].value;
//            const nm=t[i].name;
//            if(ty!='submit'){
//             res[nm]=vl;           // console.log(t[i].submit)
//            } 
//         }
//     }


function sum(a,b,fun){
    const ans =a+b;
    fun(ans);
}
function print(x){
    console.log(' ****',x,' ***');
}
sum(3,4,print);




































