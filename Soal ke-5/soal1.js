const pemisah = () => {
    const angka = 5643104614540314;
    if (typeof (angka) === 'number' && String(angka).length <= 16) {
        const pisah = angka.toString().split(0)
        let result = '';
        pisah.map((response) => {
            return result = result + response.split('').sort((a, b) => { return a - b }).join('')
        })
        resultToInteger = parseInt(result)
        console.log(resultToInteger);
    } else {
        console.log('Cek Kembali');
    }
}
pemisah()