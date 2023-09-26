// const userName = 'Max';
//
// let age = 30;
//
// age  = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }
//
// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;
//
// const printOutput = (output: string | number) => console.log(output);
//
// const button = document.querySelector('button');
//
// if (button) {
//     button.addEventListener('click', event  => console.log(event));
// }
//
// printOutput(add(5));
//
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const myPerson = {
    firstName: 'Max',
    age: 30,
};

const copiedPerson = { ...myPerson, city: 'New-York' };

const notCopiedPerson = myPerson;

notCopiedPerson.firstName = 'Maxmilian'

copiedPerson.firstName = 'Maximas'

// rest parameters
// ...numbers: number[] - tuple type
const add = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array & Object Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, remainingHobbies);

const {
    firstName: renameParam,
    age
} = myPerson;

console.log(renameParam, age, myPerson);