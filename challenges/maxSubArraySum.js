
function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    
    //find initial sum of num numbers
    
    //slide and check
    let sum = 0;
    for(let i=0; i<num; i++) {
        if(typeof arr[i] !== 'number') {
            return null;
        }
        sum+= arr[i];
    }
    let maxSum = sum;
    for(let j=num; j<arr.length; j++) {
        const tempSum = sum - arr[j - num] + arr[j];
        sum = tempSum;
        maxSum = Math.max(tempSum, maxSum);
    }
    
    return maxSum;
  }