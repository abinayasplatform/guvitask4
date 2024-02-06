// Print odd numbers in an array





// anonymous function

let oddnum = function(...nums){
    for(index=0;index<nums.length;index++){
if(nums[index] % 2 == 1){
    console.log("Anonymous function  :   ", nums[index])
}
}
}
oddnum(1,2,3,4,5,6,7,8,9,10);





//Arrow function

let oddnum1 = (...nums) => {
    for(index=0;index<nums.length;index++){
if(nums[index] % 2 == 1){
    console.log("Arrow function  :   ", nums[index])
}
}
}
oddnum1(11,12,13,14,15,16,17,18,19,20);





// IIFE : Immediately Invoked Function Expression

((...nums) => {
    for(index=0;index<nums.length;index++){
if(nums[index] % 2 == 1){
    console.log("IIFE  :  ", nums[index])
}
}
})(21,22,23,24,25,26,27,28,29,30);