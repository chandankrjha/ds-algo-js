function averagePair(arr, avg) {
    let q = 1;

    if(arr.length < 2) {
        return false;
    }

    for(let p=0; p<arr.length - 1; p++) {
        const currentAvg = (arr[p] + arr[q]) / 2;
        console.log(currentAvg)
        if((Math.round(currentAvg * 10) / 10) === avg) {
            return true;
        }
        q++;
    }

    return false;
}
console.log(averagePair([], 2.5))