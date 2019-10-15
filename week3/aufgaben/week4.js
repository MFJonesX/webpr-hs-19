const times1 = (a,b) => a*b; // return NaN
const times2 = a => b => a * b; // return function a

// Partial Application
const twoTimes = times2(2);

// Map
// Bei Map sind nach dem Aufruf immer gleich viele Elemente im Array wie vorher
// [1,2,3].map(x => times (2)(x)); -> Beta Reduktion
// [1,2,3].map(times (2));
[1,2,3].map(twoTimes);

// Filter
// Bei Filter sind nach dem Aufruf sind gleich viel oder weniger Elemente im Array
const odd = x => x % 2 === 1;

//[1,2,3].filter(x => x % 2 === 1);
//[1,2,3].filter(x => odd(x)); -> Beta Reduktion
[1,2,3].filter(odd);

const teilbarDurch = x => y => x % y === 0;

//[1,2,3].filter(x => x => y => x % y === 0);
//[1,2,3].filter(x => teilbarDurch(x)(y)); -> Laufzeit Fehler ???

// Reduce

// reduce((acc,cur) => acc + cur); // [1,2,3] -> 1 + 2 = 3 ; 3 + 3 = 6,

const plus = (accu, cur) => accu + cur;
// [1,2,3].reduce((accu, cur) => accu + cur); -> Beta Reduktion
console.log([1,2,3].reduce(plus));

/*
const twice = a => a * 2;

console.log([1,2,3].map(twice).toString() === "2,4,6");
*/

/*Provide a function (or lambda expression) named 'divides' such that
    [1,2,3,4,5,6].filter(divides(3)) equals [3,6]*/

const divides = x => y => y % 3 === 0;

//console.log([1,2,3,4,5,6].filter(divides(3)).toString() === "3,6");


const join = x => (accu, cur) => accu + x + cur;

console.log([1,2,3].reduce(join('-')));