const selisihAngka = (n,a,b) => {
    let result = [a]
    for ( i = 1; i < n; i++) {
        result.push(a+=b)
    }
    console.log(result);
 }
 selisihAngka(12,3,5);