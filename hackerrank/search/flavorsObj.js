function whatFlavors(cost, money) {
  let obj = {};

  for (let i = 0; i < cost.length; i++) {
    // compare cost[i] and check whether obj has money - cost[i]
    const diff = money - cost[i];
    if (obj[diff]) {
      console.log(obj[diff].index + 1, i + 1);
      break;
    } else {
      obj[cost[i]] = {
        index: i,
        val: cost[i],
      };
    }
  }
}

// valid solutions all test cases passed.
