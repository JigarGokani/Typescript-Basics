"use strict";
// Generics In Typescript
const Users = [
    {
        name: "Jigar",
        age: 21,
    },
    {
        name: "Binit",
        age: 22
    },
    {
        name: "Jee",
        age: 34
    },
    {
        name: "Janvi",
        age: 15
    }
];
const filterByPeople = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filterPeopleByName = filterByPeople(Users, "name", "Jigar");
const filterPeopleByAge = filterByPeople(Users, "age", 22);
console.log(filterPeopleByAge);
