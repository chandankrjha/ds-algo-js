function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) {
        return [];
    }

    return [capitalizeString(arr[0])].concat(capitalizeFirst(arr.slice(1)))
  }
  
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  