const getDigit = (number, position) => {
  let str = "";
  for (let k = String(number).length - 1; k >= 0; k--) {
    str += String(number)[k];
  }
  return str[position] || 0;
};

const digitCount = (num) => String(num).length;

const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let k = 0; k < arr.length; k++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[k]));
  }
  return maxDigits;
};

const radixSort = (arr) => {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits - 1; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(radixSort([235, 12, 1936, 57, 4, 290]));
