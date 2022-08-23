// Javascript program to implement selection sort on array of strings

// Sorts an array of strings
function selectionSort(arr, n) {
  // One by one move boundary of
  // unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in
    // unsorted array
    let min_index = i;
    let minStr = arr[i];

    for (let j = i + 1; j < n; j++) {
      /*compareTo() will return a -ve value,
                if string1 (arr[j]) is smaller than
                string2 r[j] is sm(minStr)*/
      // If araller than minStr

      if (arr[j].localeCompare(minStr) === -1) {
        // Make arr[j] as minStr and
        // update min_idx
        minStr = arr[j];
        min_index = j;
      }
    }

    // Swapping the minimum element
    // found with the first element.
    if (min_index != i) {
      let temp = arr[min_index];
      arr[min_index] = arr[i];
      arr[i] = temp;
    }
  }
}

let arr = ['GeeksforGeeks', 'Practice.GeeksforGeeks', 'GeeksQuiz'];
let n = arr.length;
console.log('Given array is', arr);

selectionSort(arr, n);

console.log('Sorted array is', arr);
