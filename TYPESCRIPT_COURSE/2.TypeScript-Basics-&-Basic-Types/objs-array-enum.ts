enum Role {
    ADMIN = 5,
    READ_ONLY = 1,
    AUTHOR = 'ADMIN'
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple
    roleNumber: string | number;
} = {
    name: 'Nikita',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    roleNumber: 5
};

if (person.roleNumber === Role.ADMIN) {
    console.log('is admin');
}

person.role.push('admin');
// person.role[1] = 10;

// person.role = [2, 'sadf', 2];

let favoriteGalactoses: string[];
favoriteGalactoses = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}