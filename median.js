// Return median of two sorted arrays of the same size


// anonymous function

let median = function (num1, num2) {
    return function(nums1, nums2) {
        let merge = [...nums1, ...nums2].sort((a, b) => a - b);
        let length = merge.length;
        let mid = Math.floor(length / 2);
        return length % 2 === 0 ? (merge[mid - 1] + merge[mid]) / 2 : merge[mid];
    };
}
();

let nums1 = [1,2,3,4,5];
let nums2 = [8,9,2,4,6];
console.log("Anonymous function  :   ", median(nums1, nums2));




// IIFE : Immediately Invoked Function Expression



let medianOfSortedArrays = (() => {
    return function(nums11, nums12) {
        let merge = [...nums11, ...nums12].sort((a, b) => a - b);
        let length = merge.length;
        let mid = Math.floor(length / 2);
        return length % 2 === 0 ? (merge[mid - 1] + merge[mid]) / 2 : merge[mid];
    };
})();

let nums11 = [1, 3, 5, 8, 12];
let nums12 = [12, 4, 6, 3, 1];
console.log("IIFE  : ",medianOfSortedArrays(nums11, nums12)); 


