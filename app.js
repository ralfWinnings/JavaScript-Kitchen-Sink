let fullName = 'Gary Smith II';         //Name Variable

const unitedStates = 50;                //Number of states variable

let sum = 5 + 4;                        //A variable containing the sum of two numbers

if (charCodeAt(0) > 76) {
    alert("Back of the line!");         //Write some code so that if your name starts with a letter after L, you display an alert that says "Back of the line!". Otherwise, you should display an alert that says "Next!".
} else {
    alert("Next!");
}

function sayHello () {
    alert('Hello World');               //sayHello function.
}

sayHello();                             //Calling the sayHello function.


function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + "you aren't old enough to view this page!");        //checkAge function (with if statement within function.)
    }
}

let charles = {
    name: "Charles",
    age: 21
};
let abby = {
    name: "Abby",
    age: 27                         //Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
};
let james = {
    name: "James",
    age: 18
};
let john = {
    name: "John",
    age: 17
};
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

let favoriteVeggies = ['Carrots', 'Corn', 'Brocoli'];           //Veggie Array

for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);                        //Looping through the Vegie Array
}

let people = [
    {
        name: 'Gary',
        age:23
    },
    {
        name: 'Brooke',
        age: 19
    },
    {
        name: 'Chyna',
        age: 19
    }
];

for (let i=0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);        //Using a loop with a checkAge function and the people (object) array.
}

function getLength(string) {                    //getLength fuction that takes any word as an arguement. This function should return the number of characters in the string.
    return string.length;
}

let length = getLength('Hello World')           //Calling getLength function passing Hello World as an argument, Storing the returned result of that function in a variable.

if (length % 2 === 0) {
    console.log("The world is nice and even!");         //(the number in the length variable ) If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
} else {
    console.log("The world is an odd place!");
}