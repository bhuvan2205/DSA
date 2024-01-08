
const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start],
      swapIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
  };
  
  const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
  
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
  };
  
  const output = quickSort([2, 4, 5, 3, 1, 6]);
  console.log(output);
  