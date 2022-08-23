// Inversion Count for an array indicates – how far (or close) the array is from being sorted.

// Javascript program to count inversions in an array

arr = [1, 20, 6, 4, 5];

function getInvCount(arr) {
  let inv_count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) inv_count++;
    }
  }
  return inv_count;
}

// function call
console.log('Number of inversions are ' + getInvCount(arr));

// Time complexity: O(n2)

// Method 2: Merge sort
// Function to count the number of inversions
// during the merge process
function mergeAndCount(arr, l, m, r) {
  // Left subarray
  let left = [];
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i]);
  }

  // Right subarray
  let right = [];
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i]);
  }
  let i = 0,
    j = 0,
    k = l,
    swaps = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++];
    } else {
      arr[k++] = right[j++];
      swaps += m + 1 - (l + i);
    }
  }
  while (i < left.length) {
    arr[k++] = left[i++];
  }
  while (j < right.length) {
    arr[k++] = right[j++];
  }
  return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {
  // Keeps track of the inversion count at a
  // particular node of the recursion tree
  let count = 0;
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    // Total inversion count = left subarray count
    // + right subarray count + merge count

    // Left subarray count
    count += mergeSortAndCount(arr, l, m);

    // Right subarray count
    count += mergeSortAndCount(arr, m + 1, r);

    // Merge count
    count += mergeAndCount(arr, l, m, r);
  }
  return count;
}

// Driver code
let arr = new Array(1, 20, 6, 4, 5);
console.log(mergeSortAndCount(arr, 0, arr.length - 1));

// Time complexity: O(n log n)
