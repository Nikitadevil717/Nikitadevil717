// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Nikita';

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['1', '2'];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// }

let people: Person[];

people = [{
    name: '12',
    age: 32
}]

let course: string | number = 'React - The complete Guide';

course = 3;

// Functions

function add(a: number, b: number) {
    return a + b;
}

function printOut(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];

    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringsArray = insertAtBeginning(['1', '2', '3'], '-1');

// updatedArray[0].split('');
stringsArray[0].split('');