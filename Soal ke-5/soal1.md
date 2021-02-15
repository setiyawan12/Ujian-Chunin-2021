# Number Separator
  ### Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas. contoh (56431046145403146) menjadi (134561444561346) 
  #### Implentation
   ```
   const numberSeparator = () => {
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
    numberSeparator()
  ```
* buat fungsi numberSeparator yang di dalamnya menampung variable anggka
* lalu angka tersebut akan diurutkan, dengan melewati validasi terlebih dahulu.
* jika tipe value variabel angka bukan number dan panjang data lebih dari sama dengan 16, maka ada yang salah dengan data angka itu.
* jika benar data angka akan di pisah dan setiap bertemu angka 0  dan akan di masukan ke dalam variable pisah
* setelah itu lakukan perulangan menggunakan map , setiap index akan di pisah lagi, kemudian kita urtutkan menggunakan sort dari terkecil ke terbesar dan kita gabungkan menggunakan join
* data akan di masukan kedalam variable result
* variable result akan di convert ke Integer