function add(num) {
    return num + 1;
}

//first class functions
const addFunct = add;

console.log(addFunct(5));

//arrow functions
const addArrow = (num) => {
    return num + 1;
};

console.log(addArrow(5));

//first class function is functions being passed as argument or returned

//higher order functions are functions that take functions as arguments or return functions

//callback functions are functions that are passed as arguments to other functions


//Spread opperator example
const numbers = [1, 2, 3, 4, 5];

function addNumbers(a, b, c, d, e) {
    return a + b + c + d + e;
}

addNumbers(...numbers);

//copy array
const newNumbers = [...numbers];