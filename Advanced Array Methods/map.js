let newPeople = people.map((person) => {
  const { drink, age } = person;
  return {
    ...person,
    ejected: age < 21 && drinks.indexOf(drink) > 7 ? true : false,
  };
});
console.log(newPeople);

