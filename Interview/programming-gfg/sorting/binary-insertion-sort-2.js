// iterative implementation
function binarySearch(a, item, low, high) {
  while (low <= high) {
    var mid = low + (high - low) / 2;
    if (item == a[mid]) return mid + 1;
    else if (item > a[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return low;
}

// Function to sort an array a[] of size 'n'
function insertionSort(a, n) {
  var i, loc, j, k, selected;

  for (i = 1; i < n; ++i) {
    j = i - 1;
    selected = a[i];

    // find location where selected should be inseretd
    loc = binarySearch(a, selected, 0, j);

    // Move all elements after location to create space
    while (j >= loc) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = selected;
  }
}

// Driver Code
var a = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54];
var n = a.length,
  i;

insertionSort(a, n);

console.log(a);
