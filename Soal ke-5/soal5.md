# IQ TEST
### Anton sedang bersiap untuk mengikuti tes IQ. Tes yang paling sering keluar adalah mencari angka mana yang berbeda dari yang lain. Anton mengamati bahwa pasti ada satu angka yang berbeda dari yang lain dalam hal pemerataan. Buatlah sebuah program yang dapat membantu Anton untuk mengetahui di posisi manakah angka yang berbeda. Catatan Posisi angka dimulai dari satu (1) bukan nol (0)
#### Implementasi
```
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
```
* fungsi iq menerima 1 parameter number yaitu sebuah deret nilai
* lalu nilai dari parameter akan masuk kedalam variabel bilangan setelah di split() atau pisah dengan spasi yang akan mengembalikan array baru
* memebuat 3 variable ganjil genap position
* lakukkan for loop untuk menghitung nilai ganjil genap
* i=0 dan i lebih kecil daru panjang nilai bilangan maka i akan di tambah  1
* pengondisian jika nilai index bilangan jika di sisa bagi 2 = 0 maka nilai genap akan ditambah 1 jika tidak makan ganjil akan ditambah 1
* dalam pengondisian jika nilai ganjil lebih kecil dari genap berarti nilai yang berbeda adalah bilangan ganjil
* masuk kedalam pengondisian jika nilai index newBil bisa disisa bagi 2 == 0  maka kita akan mencari posisi index tersebut dengan mengunakan indexOf
* lalu kita return position
