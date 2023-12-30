const insertionSort = (arr) => {
  if (arr.length === 0) return [];

  for (let i = 1; i < arr.length; i++) {
    const pointer = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] < pointer) break;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = pointer;
  }

  return arr;
};

console.log(insertionSort([2, 1, 0])); // [0, 1, 2]