
function different(set1, set2) {
    let total=0
    for (i  of set1){
        for (j in set2 ){
            if (i==set2[j]) {
                break;
            }
            if (j==set2.length-1) {
                total += i;
            }
            
        }
    }
    for (j of set2) {
        for ( i in set1) {
                if (j==set1[i]) {
                    break;
                }
                if (i==set1.length-1) {
                    total += j;
                }
            }
        }
        return total;
    } 




   
