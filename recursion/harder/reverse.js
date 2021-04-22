function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  return str.charAt(str.length - 1) + reverse(str.substr(0, str.length - 1));
}

// console.log(reverse('awesome')) // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
