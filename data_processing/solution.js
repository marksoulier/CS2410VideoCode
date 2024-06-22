/*Fig Unlimited Data Processing*/
/*
  filter: returns a subset of the input data that contains only the items for which the predicate returns true
  @data: an array of any arbitrary data
  @predicate: a function that takes a single datapoint as an argument. Returns either true or false.
  @return: a new array that contains all of the values in data
           for which the predicate function returns true
*/
function filter(data, predicate) {
    const new_array = [];
    for (const data_point of data) {
        if (predicate(data_point)) {
            new_array.push(data_point)
        }
    }
    return new_array;
};

/*
  findLast: finds the last value in an array that meets the condition specified in the predicate
  @data: an array of any arbitrary data
  @predicate: a function that takes a single datapoint as an argument. Returns either true or false.
  @return: a single data point from data
*/
function findLast(data, predicate) {
    //traverse data backward
    for (let i = data.length - 1; i >= 0; i--) {
        const data_point = data[i];
        if (predicate(data_point)) {
            return data_point;
        }
    }
    return null;
};

/*
  map: creates a new array based on the input array where the value at each position in the array is the result of the callback function.
  @data: an array of any arbitrary data
  @callback: a function that takes a single datapoint as an argument. Returns a new value based on the input value
  @return: a new array of the callback function results
*/
function map(data, callback) {
    const new_array = [];
    for (const data_point of data) {
        new_array.push(callback(data_point));
    }
    return new_array;
};

/*
  pairIf: creates a new array based on the input arrays where the value at each position is an 
          array that contains the 2 values that pair according to the predicate function.
  @data1: an array of any arbitrary data
  @data2: an array of any arbitrary data
  @predicate: a function that takes a single datapoint from each input array as an argument. Returns true or false
  @return: the newly created array of pairs
*/
function pairIf(data1, data2, predicate) {
    const new_array = [];
    for (const data_point1 of data1) {
        for (const data_point2 of data2) {
            if (predicate(data_point1, data_point2)) {
                new_array.push([data_point1, data_point2]);
            }

        }
    }
    return new_array;
};

/*
  reduce: creates an accumulated result based on the reducer function. The value returned is returned
          is the return value of the reducer function for the final iteration.
  @data: an array of any arbitrary data
  @reducer: a function that takes a single datapoint from each input array as an
            argument and the result of the reducer function from the previous iteration.
            Returns the result to be passed to the next iteration
  @initialValue: the starting point for the reduction.
  @return: the value from the final call to the reducer function.
*/
function reduce(data1, reducer, initialValue) {
    var value = initialValue;
    for (const data_point of data1) {
        value = reducer(data_point, value);
    }
    return value;
}

//Output Answers to Figs Unlimited Questions
const invalid_transaction = (data) => {
    //if 0 or null
    if (!data.amount) return true;
    const catagories = ["FIG_JAM", "FIG_JELLY", "SPICY_FIG_JAM", "ORANGE_FIG_JELLY"];
    //check if data is not in the product list
    var Notvalid = true;
    for (const item of catagories) {
        if (data.product === item) {
            Notvalid = false;
        }
    }
    return Notvalid;
}

console.log("Number of invalid transactions: ", filter(transactions, invalid_transaction).length);
console.log("Number of duplicate customers: ", pairIf(customers, customers, (data1, data2) => {
    return (data1.emailAddress === data2.emailAddress && data1.id !== data2.id)
}).length / 2);
console.log("Most recent transaction over $200: $", findLast(transactions, (data) => data.amount > 200.0).amount);
const transaction_sizes = {
    small: null,
    medium: null,
    large: null,
};

transaction_sizes["small"] = reduce(transactions, (data, acc) => {
    if (data.amount <= 25) return acc + 1;
    return acc;
}, 0);
transaction_sizes["medium"] = reduce(transactions, (data, acc) => {
    if (data.amount > 25 && data.amount < 75) return acc + 1;
    return acc;
}, 0);
transaction_sizes["large"] = reduce(transactions, (data, acc) => {
    if (data.amount >= 75) return acc + 1;
    return acc;
}, 0);

console.log("Number of small transactions: ", transaction_sizes["small"]);
console.log("Number of medium transactions: ", transaction_sizes["medium"]);
console.log("Number of large transactions: ", transaction_sizes["large"]);
//calculate customers with transactions over 200
const trans_200 = filter(transactions, x => x.amount > 200);
const pair = pairIf(trans_200, customers, (trans, customer) => trans.customerId === customer.id);
const u_customers = reduce(pair, (data, acc) => {
    if (acc.includes(data[1])) {
        return acc;
    };
    acc.push(data[1]);
    return acc;
}, []);
console.log("Customers with transactions over $200: ", u_customers);
console.log("Names of customers with transactions over $200: ", map(u_customers, (customer) => customer.firstName + " " + customer.lastName));

