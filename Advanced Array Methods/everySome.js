//Some
console.log(
    'Lizard: ' +
    people.some( (person) => person.pet == 'lizard') + '\n' +
    'Fish: ' +
    people.some( (person) => person.pet == 'fish') + '\n' +
    'Bird: ' +
    people.some( (person) => person.pet == 'bird') + '\n' +
    'Hamter: ' +
    people.some( (person) => person.pet == 'hamster')
);

//Every
console.log(
    '10 to 25: ' +
    people.every( (person) => person.age <= 25 && person.age >= 10) + '\n' + 
    '15 to 30: ' +
    people.every( (person) => person.age <= 30 && person.age >= 15) + '\n' + 
    '20 to 35: ' +
    people.every( (person) => person.age <= 35 && person.age >= 20)
);

