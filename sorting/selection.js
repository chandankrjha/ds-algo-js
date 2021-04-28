function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowPos = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowPos]) {
        lowPos = j;
      }
    }

    // lets switch min and ith value
    let temp = arr[lowPos];
    arr[lowPos] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }
}
selectionSort([100, 40, 20, 30, 50, 10, 1]);
