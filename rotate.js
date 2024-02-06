// Rotate an array by k times





        // Anonymous function



const arrays = [1, 2, 3, 4, 5];
const k1 = 2;

let rotatedArr = function ()  {
  const rotate = (arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };

  return rotate(arrays, k1);
}();

console.log(rotatedArr);





        //  IIFE : Immediately Invoked Function Expression




const array = [1, 2, 3, 4, 5];
const k = 5;

const rotatedArray = (() => {
  const rotate = (arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
  };

  return rotate(array, k);
})();

console.log(rotatedArray);