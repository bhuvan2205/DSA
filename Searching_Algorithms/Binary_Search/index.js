const binarySearch = (arr, val = 1) => {
  let left = 0;
  let right = arr.length;
  let pointer = Math.floor(left + right / 2);

  while (arr[pointer] !== val) {
    if (arr[pointer] < val) left = pointer + 1;
    else if (arr[pointer] > val) right = pointer;

    pointer = Math.floor((left + right) / 2);
  }

  return arr[pointer] === val ? pointer : -1;
};

console.log(binarySearch([1, 2, 4, 5, 6], 2)); // 1
