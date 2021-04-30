function whatFlavors(cost, money) {
  // cost is

  // cost is an array, we have to find two numbers whose sum is money
  let p = 0,
    q = cost.length - 1;
  const pos = [];
  while (p < cost.length) {
    if (cost[p] + cost[q] === money) {
      pos.push(p + 1);
      pos.push(q + 1);
      break;
    }

    if (q - 1 === p) {
      p++;
      q = cost.length - 1;
    } else {
      q--;
    }
  }

  console.log(...pos);
}
