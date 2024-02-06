// Sum of all numbers in an array




// anonymous function

let sumadd = function(...nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++)  
     sum = sum + nums[i];  
    console.log("Anonymous function  :   ", sum)

}
sumadd(1,2,3);




//Arrow function

let sum = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)  
     sum = sum + nums[i];  
    console.log("Arrow function  :   ", sum)

}
sum(1,2,3,6,7);





// IIFE : Immediately Invoked Function Expression


((...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++)  
     sum = sum + nums[i];  
    console.log("IIFE  :  ",sum)

})(1,2,3,6,8,7);
