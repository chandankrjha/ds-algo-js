// two numbers are given
// check whether both of them have the same frequency of numbers

// 123 and 331 // false
// 123 and 321 // true
// 123456 623451 // true


function sameFrequency(num1, num2) {

    // two objects n1, n2 with frequencies

    let n1 = {}, n2 = {}
    while(num1 > 0) {
        const rem = num1 % 10;
        num1 = Math.floor(num1/10);

        if(n1[rem]) {
            n1[rem] += 1;
        } else {
            n1[rem] = 1
        }
    }

    while(num2 > 0) {
        const rem = num2 % 10;
        num2 = Math.floor(num2/10);

        if(n2[rem]) {
            n2[rem] += 1;
        } else {
            n2[rem] = 1
        }
    }
    console.log(n1, n2)
    for (let key in n1) {
        if(n1[key] !== n2[key]) {
            return false;
        }
    }

    return true;

}

console.log(sameFrequency(123, 321));