// Remove duplicates from an array


// anonymous function


let uniqueArrays = function (...arr) {
    return function(arr){
        return Array.from(new Set(arr));
    }
}();

let arrWithDupli = ["apple", "mango", "apple","orange", "mango", "mango","melon","melon"];
let uniqueArrResult = uniqueArrays(arrWithDupli);
console.log("Anonymous function  :  ", uniqueArrResult);






// IIFE : Immediately Invoked Function Expression

let uniqueArray = (function (...arr){
    return function(arr){
        return Array.from(new Set(arr));
    }
})();

let arrWithDuplicate = ["apple", "mango", "apple","orange", "mango", "mango","kiwi","dragonfly","dragonfly"];
let uniqueArrayResult = uniqueArray(arrWithDuplicate);
console.log("IIFE  :  ",uniqueArrayResult);






