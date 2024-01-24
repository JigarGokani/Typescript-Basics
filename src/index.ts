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

class Info{
   
    constructor(private height:number,public weight:number,protected power?:number){}
}

const jigar = new Info(122,11)

console.log(jigar.weight)

class Info2 extends Info{

}

