const selectionSort = (arr) => {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[small] > arr[j]) small = j;
    }
    [arr[i], arr[small]] = [arr[small], arr[i]];
  }
  return arr;
};

console.log(selectionSort([2, 1, 3])); // [1, 2, 3]

/**
  
OPTIMIZED VERSION - SELECTION SORT

const selectionSort = (arr) => {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[small] > arr[j]) small = j;
    }
  }
  if (small !== i) [arr[i], arr[small]] = [arr[small], arr[i]];

  return arr;
}; 
 
**/
