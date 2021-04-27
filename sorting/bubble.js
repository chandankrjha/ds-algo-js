function bubbleSort(arr) {
  let hasSwapHappened;
  for (let i = 0; i < arr.length; i++) {
    hasSwapHappened = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        hasSwapHappened = true;
      }
    }
    console.log(arr);

    if (!hasSwapHappened) {
      break;
    }
  }
}

bubbleSort([200, 50, 30, 40, 10, 2, 3, 101]);
