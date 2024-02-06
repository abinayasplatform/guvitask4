// Return all the prime numbers in an array



            // anonymous function

// let isprime = function (...nums){
// var primes = nums.filter(function(num) {
//     for(var i=2;i<=Math.sqrt(num);i++) {
//             if(num % i ===0)
//                 return false;
//      }
//                 return num > 1;
//     });
//             console.log(primes);
//      }
// isprime(1,2,3,5,35,67,24,68,23,56);
            





                //Arrow function
                
                
// let isprime = (...nums) => {
// var primes = nums.filter(function(num) {
//         for(var i=2;i<=Math.sqrt(num);i++) {
//             if(num % i ===0)
//             return false;
//         }
//         return num > 1;
//     });
//     console.log(primes);

//  }
// isprime(1,2,3,5,35,67,24,68,23,56);






           // IIFE : Immediately Invoked Function Expression



// (function(...nums) {
//     var primes = nums.filter(function(num) {
//         for(var i=2;i<=Math.sqrt(num);i++) {
//             if(num % i ===0)
//             return false;
//         }
//         return num > 1;
//     });
//     console.log(primes);
// })(1,2,3,5,35,67,24);