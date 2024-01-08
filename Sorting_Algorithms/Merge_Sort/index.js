console.log("Data Structures and Algorithms🚀");

const mergeArray = (arr1, arr2) => {
  let result = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) result.push(...arr1.slice(i));

  if (j < arr2.length) result.push(...arr2.slice(j));

  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return mergeArray(left, right);
};

console.log(mergeSort([2, 3, 1])); // [1, 2, 3]
