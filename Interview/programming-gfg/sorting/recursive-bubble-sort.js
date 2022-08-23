function bubblesort(arr, n) {
  if (n == 0 || n == 1) {
    return;
  }

  var temp;

  for (i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  bubblesort(arr, n - 1);
}

var array = [2, 5, 1, 6, 9];
bubblesort(arr, arr.length);

console.log('Sorted array:', arr);
