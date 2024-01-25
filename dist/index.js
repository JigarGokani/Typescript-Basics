"use strict";
// --------------------------------OBJECTS AND FUNCTIONS IN TYPESCRIPT-------------------
// type MyData = (product:{
// name:String;
// stock:Number;
// price:Number;
// present:boolean
// })=>void
// const myData:MyData = (product)=>{
//     console.log(product)
// }
// const product = {
//     name:"Macbook",
//     stock:2,
//     price:450,
//     present:true
// }
// myData(product)
// -------------------------------CLASSES IN TYPESCRIPT --------------------------
// class Info{
//     constructor(private height:number,public weight:number,protected power?:number){}
// }
// const jigar = new Info(122,11)
// console.log(jigar.weight)
// class Info2 extends Info{
// }
// -----------------------------TYPE ASSERTION(DOM MANIPULATION)---------------------------
// -------1st Type-----------------------------------------
// const btn = document.getElementById("btn") as HTMLElement
// -------2nd Type-----------------------------------------
// const btn = document.getElementById("btn")!
// -------3rd Type-----------------------------------------
// const btn = <HTMLElement>document.getElementById("btn")
// const img = document.getElementById("img") as HTMLImageElement
// const img = document.querySelector("img")!
// img.src
const form = document.getElementById("myform");
const myinput = document.querySelector("#myform > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const para = document.createElement("p");
    const newele = para.textContent = myinput.value;
    document.body.append(para);
    console.log(myinput.value);
    console.log(typeof myinput.value);
};
