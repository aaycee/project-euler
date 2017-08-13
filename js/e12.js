// Akachukwu Obi

// Project Euler #12 Question retrieved from https://projecteuler.net/problem=12 
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms in the sequence would be: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// What is the value of the first triangle number to have over five hundred divisors?

// code to generate a sequence of triangle numbers up to the nth term
// ...
// ...
// first successful try
function triangle(n) {
    "use strict";
    var set, i;
    set = [];
    for (i = 0; i < n; i = i + 1) {
        set.push(i * (i + 1) / 2); // the calculation algorithm i*(i+1)/2 was retrieved from wikipedia
    }
    return set;
}
//triangle(7) --> [0, 1, 3, 6, 10, 15, 21]
// ...
// ...
// second successful try
var triangle = function (n) {
    "use strict";
    var set, i;
    set = [0]; // I added an element to the set so that 'set[i-1]' in line 29 is valid
    for (i = 1; i < n; i = i + 1) {
        set.push(i + set[i - 1]); // this takes the simple idea of adding natural numbers to the sum before it
    }
    return set;
};
//triangle(7) --> [0, 1, 3, 6, 10, 15, 21]


// code to calculate factors of any number
// ...
// ...
// first successful try
var factors = function (n) {
    "use strict";
    var factorset, i;
    factorset = [];
    for (i = 1; i <= n; i = i + 1) {
        if (n % i === 0) {
            factorset.push(i);
        }
    }
    return factorset;
};