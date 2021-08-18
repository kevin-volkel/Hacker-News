const drinks = [
    "Soda", //0
    "Coffee", //1
    "Lemonade", //2
    "Iced tea", //3
    "Juice", //4
    "Milkshake", //5
    "Water", //6
    "Milk", //7
    "Beer", //8
    "Martini", //9
    "Margarita", //10
    "Wine", //11
    "Daiquari", //12
];

let mDrinks = drinks.filter( drink => drink.startsWith('M') )
console.log(mDrinks);

const colors = [
    "red",
    "black",
    "white",
    "blue",
    "purple",
    "orange",
    "green",
    "yellow",
];

let newArray = colors.map( (color, i) => {
    return {color, index:i}
})
console.log(newArray);


let pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];
pets = pets.map( (pet) => {
    return `${pet[0].toUpperCase()}${pet.substring(1)}`
})
console.log(pets);
