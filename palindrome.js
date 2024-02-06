// Return all the palindromes in an array

            // anonymous function

let palin = function(...arr){
   
    const palindrome = arr.filter(word =>{
        const reverseWord = word.split('').reverse().join('');
        return word === reverseWord;
    });
    console.log("Anonymous function  :   ", palindrome);
}
palin("level","malayalam","world","radar","noon");






                //Arrow function

let palind = (...arr) => {
   
    const palindrome = arr.filter(word =>{
        const reverseWord = word.split('').reverse().join('');
        return word === reverseWord;
    });
    console.log("Arrow function  :   ", palindrome);
}
palind("level","malayalam","world","radar","noon");




    // IIFE : Immediately Invoked Function Expression

(function(){
    const arr = ["level","malayalam","world","radar","noon"];

    const palindrome = arr.filter(word =>{
        const reverseWord = word.split('').reverse().join('');
        return word === reverseWord;
    });
    console.log("IIFE  :  ",palindrome);
})();



