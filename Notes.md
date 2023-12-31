# <h2>Recursion:</h2>
A function calls itself directly or indirectly. Function depends on the same function.
Example:
<pre>
factorial(n) = n * (n−1) * .... * 1
</pre>

# <h2>Searching Algorithms:</h2>
To find the given value exists in the data.
<p>Most Common ways to implement:</p>
<ul>
<li>Linear Search</li>
<li>Binary Search</li>
<ul>

# Linear Search:
Iterate over the data and check each value for the matching or not. If the value matches, return true (or index). Else return false(or -1).
<pre>Time Complexity: O(n)</pre>

# Binary Search:

Working using Divide and Conquer method. To implement this we need start(0), end(length of the data) and middle(left + right / 2).
Compare middle matching the value, if yes return true(or index).
If not, check the value is greater than middle. If yes, move the left to middle and calculate the middle again. 
Else, the middle is lesser than the value, move the end to the middle and calculate the middle again. 
Repeat the process until the start and end equals, if there is no match return false(or -1).
<pre>Time Complexity: O(log n)</pre>

# Naive String(sub-string) Search:
Iterate over the data. And one more iteration to find the match.
Create a variable to add the count and if the 1st value and 2nd value doesn’t match, break the loop. Else if the count and found length matches increment the count and at last return the count value.
<pre>Time Complexity: O(n^2)</pre>


# <h2>Sorting Algorithms:</h2>
To sort the data in particular order(asc/des).
<p>Most Common ways to implement:</p>

<ul>
<li></li>Quick Sort</li>
<li>Radix Sort</li>
<li>Heap Sort</li>
<li>Merge Sort</li>
<li>Bubble Sort</li>
<li>Insertion Sort</li>
<li>Selection Sort</li>
</ul>

# Bubble Sort: 
Iterate over the data. And one more iteration to compare current value and next value. If current value is greater than next value, swap the values.

Optimization technique:
If it’s almost sorted data, we can check if the sorting is done(no-swapping) from the previous iteration. If yes, break the loop and return the sorted array.
<pre>Time Complexity: O(n^2)</pre>

# Selection Sort:
Unlike Bubble sort, here we are going to find the smallest element and swap the values. Iterate over the data. And one more iteration to compare current value and smallest value. If smallest value is greater than the current value, update the smallest element to the current and swap the values.

# Optimization technique:
Need to sort only if the current element and smallest element is different and returns the sorted array.
<pre>Time Complexity: O(n^2)</pre>

# Insertion Sort:
Iterate over the data to go through each value. We need to store the pointer(arr[i]) value to update later. And add one more iteration to re-arrange the value from i - 1 to 0. And end of each iteration update the j + 1 value with the pointer to place the smallest  element at the beginning. If the current value(arr[j]) is lesser than pointer break the loop and return the array.
<pre>Time Complexity: O(n^2)</pre>

# Merge Sort:
First thing to understand is, how to merge two sorted Array.

Merge two Sorted Array:
<ul>
<li>Create new(result) array to store the sorted elements. Compare the first element from both of the array.</li>
<li>If the first array element is greater than the second array element, push the second array element to the result array and move the next position of the second array.</li>
<li>If the first array element is lesser than the second array element, push the first element array to the result array and move the next position of the first array.</li>
<li>Repeat the same until the position is not greater than the length.</li>
<li>Push the remaining sorted elements to the results array and return the result array.</li>
</ul>

Implementation of Merge Sort:
<p>
Find the middle position to split the array into two arrays and store it in left and right. Call the merge sort again and again until the length of the array is lesser than or equals to 1. Call the merge function to sort the elements by passing two values(left, right) and return the sorted array.</p>
<pre>Time Complexity: O(n log n)</pre>