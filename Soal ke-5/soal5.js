const iq = (number) => {
    let bilangan = number.split(' ')

    let ganjil = 0;
    let genap = 0;
    let position = 0;

    for (let i = 0; i < bilangan.length; i++) {
        if (bilangan[i] % 2 === 0) {
            genap += 1
        } else {
            ganjil += 1
        }
    }
    if (ganjil < genap) {
        for (let i = 0; i < bilangan.length; i++) {
            if (bilangan[i] % 2 === 1) {
                position = bilangan.indexOf(bilangan[i]) + 1
            }
        }
    } else {
        for (let i = 0; i < bilangan.length; i++) {
            if (bilangan[i] % 2 === 0) {
                position = bilangan.indexOf(bilangan[i]) + 1
            }
        }
    }

    return position
}

console.log(iq('2 4 8 9 10'));
