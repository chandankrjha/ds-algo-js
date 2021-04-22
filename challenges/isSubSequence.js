function isSubsequence(first, second) {
    // good luck. Add any arguments you deem necessary.
    // p if matches move to next
    // q even if not matches move to next
    let p=0, q=0;
    
    while(p < first.length && q < second.length) {
        if(first.charAt(p) === second.charAt(q)) {
            p++;
            q++;
        } else {
            q++;
        }
        
        if(p === first.length) {
            return true;
        }
    }
    
    return false;
  }