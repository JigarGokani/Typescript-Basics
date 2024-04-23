// Generics In Typescript

const func=<T>(n:T):T=>{
    return n
}

const ans = func(5)
const ans1 = func("5")
const ans2 = func(true)

// Passing our types
type Person = {
    name:string,
    age:number
}

const func = <T>(n:T):T=>{
    return n;
}

const User1:Person = {
    name:"Jigar",
    age:21
}

const ans = func<Person>(User1)

// Passing multiple types

const func=<T,U>(n:T,o:U):{n:T,o:U}=>{
return {n,o}
}

const ans = func<number,string>(5,"jigar")

// Using Extends keyword in generics
const func = <T,U extends T>(n:T,o:U):{n:T,o:U} =>{
return {n,o}

}

const ans = func<number,number>(5,66.7)

// Explaining Extends keyword from a good example

type Person1 ={
    name:string,
    age:number
}

type Person2 = {
    name:string,
    age:number,
    email:string

}

const User1:Person1={
    name:"Jigar",
    age:45
}

const User2:Person2={
    name:"Binit",
    age:33,
    email:'Binit@gmail.com'
}

const func = <T,U extends T>(n:T,o:U):{n:T,o:U}=>{
return {n,o};
}

const ans = func<Person1,Person2>(User1,User2)

// Generics by complex example

type Person = {
  name: string;
  age: number;
};

const Users: Person[] = [
  {
    name: "Jigar",
    age: 21,
  },
  {
    name:"Binit",
    age:22
  },
  {
    name:"Jee",
    age:34
  },
  {
    name:"Janvi",
    age:15
  }
];


const filterByPeople = <T,U extends keyof T >(arr:T[],property:U,value:T[U]):T[]=>{

    return arr.filter((item)=>item[property]===value)

}

const filterPeopleByName = filterByPeople(Users,"name","Jigar")
const filterPeopleByAge = filterByPeople(Users,"age",22)

console.log(filterPeopleByAge);
