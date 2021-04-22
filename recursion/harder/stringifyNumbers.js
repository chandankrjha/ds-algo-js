function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = stringifyNumbers(obj[key]);
    }
  }

  return newObj;
}
