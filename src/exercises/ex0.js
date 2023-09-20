// Create a function that adds two numbers and write a test case for it
function sum(a,b) {
    return a + b;
}
//Create a function that subtracts two numbers and write a test case for it
function subtract(a, b) {
    return a - b;
}
//Create a function that multiplies two numbers and write a test case for it
function multiple(a, b) {
    return a * b;
}
//Create a function that checks if a string contains a specific substring and write a test case for it
function isContain(sentence, word) {
    return sentence.includes(word);
}
//Create a function that reverses a string and write a test case for it
function stringReverse(word) {
    const strBox = word.split("").reverse().join();
    console.log(strBox);
    return strBox;
}
module.exports = {sum, subtract, multiple, isContain, stringReverse};