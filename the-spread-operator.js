/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log("second array", arr2);
console.log("first array", arr1);


// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];
arr4.push(4);
console.log("third-array", arr3);
console.log("forth-array", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4};
let obj3 = {...obj1, b: 5}
console.log("firsts-objact", obj1);
console.log("second-object", obj2);
console.log("third-object", obj3);

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);
//callback function
hello(oodbye);
function hello(callback){
    console.log("hello");
    callback();
}
function goodbye(){
    console.log("bye")
}


// map
const students = ["lima", "hawa","marwa"];
const studentupper = students.map(upperCase);

console.log(studentupper);
 
function upperCase(element){
    return element.upperCase();
}



//filter
let numbers = [1, 1, 3, 4, 5, 6];
let evennum = numbers.filter(isEven);
console.log(evennum);

function isEven(element){
    return element % 2 ===0;
}
*/
// reduce = reduce the elemnts of any array to a single value
const grades = [75, 50, 90, 80, 95];

const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}