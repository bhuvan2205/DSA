const bubbleSort = (arr) => {
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // Another way of swapping - es6
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 5, 3, 1, 4])); // [1, 2, 3, 4, 5]

/**
 
OPTIMIZED VERSION - BUBBLE SORT

const oBubbleSort = (arr) => {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

**/
