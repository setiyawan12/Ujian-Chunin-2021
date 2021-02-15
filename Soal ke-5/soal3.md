# difference in numbers
### buatlah fungsi yang menampilkan angka, berdasarkan urutan angka yang sudah di tentukan. Yang menerima 3 parameter: n = urutan angka yang ingin dicari, a = angka pertama, b = selisih tiap angka
#### Implementasi
```
const selisihAngka = (n,a,b) => {
    let result = [a]
    for ( i = 1; i < n; i++) {
        result.push(a+=b)
    }
    console.log(result);
 }
 selisihAngka(12,3,5);
```
* buat fungsi selisihAngka yang berisi 3 parameter n,a,b 
* nilai a akan dianggap variable result
* membuat perulangan for yang mana i dan i lebih kecil dari n lalu i di tambah
* kita push nilai hasil dari a di tambah b dan di masukan ke dalam variabel result