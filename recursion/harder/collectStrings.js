function collectStrings(ob) {
  const res = [];

  function helper(oo) {
    for (let key in oo) {
      if (typeof oo[key] === 'string') {
        res.push(oo[key]);
      } else {
        helper(oo[key]);
      }
    }
  }
  helper(ob);

  return res;
}
