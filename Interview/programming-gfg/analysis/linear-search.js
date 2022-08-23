// javascript implementation of the approach

// Linearly search x in arr. If x is present then
// return the index, otherwise return -1
function search(arr, n, x) {
  var i;
  for (i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

/* Driver program to test above functions */

var arr = [1, 10, 30, 15];
var x = 30;
var n = arr.length;
console.log(x + ' is present at index ' + search(arr, n, x));

// Best Case: O(1), This will take place if the element to be searched is on the first index of the given list. So, the number of comparisons, in this case, is 1.
// Average Case: O(n), This will take place if the element to be searched is on the middle index of the given list.
// Worst Case: O(n), This will take place if:
//  The element to be searched is on the last index
//  The element to be searched is not present on the list
