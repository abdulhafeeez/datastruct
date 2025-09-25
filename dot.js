 function dotproduct(arr1, arr2) {
        let pro=0;
        for (let i = 0; i < arr1.length; i++) {
            pro += (arr1[i] * arr2[i]);
        }
        return pro;
    }