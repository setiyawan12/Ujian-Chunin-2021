# menghitung rata-rata UN beserta gradenya

### mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut: 90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D, 0 - 59 = E

#### Metode Yang Di Gunakan
  * Reduce
  * Pengkondisian
  * Array
   ```
   const nilai = (nilai) => {
    let valid =0;
    for (let i = 0; i < nilai.length; i++) {
        if (typeof(nilai[i]) === "number" && typeof(nilai[i]==="string")) {
            valid += 1
        } else {
            valid += 0
            return `input harus number`
        }
    }
  ```
  * Disini kita menbuat 1 paramater yaitu  nilai yang di dalam variabel mempunyai perulangan dan pengkondisian
  * memebuat variable vali yang mempunyai nilai 0
  * perulangan menggunakan for i= 0; i<nilai.length; i++ //increment
  * pengkondisan dan validasi di sini kita cek tipe data apa bila type data nya number akan masuk ke valid += 1 dan ketika datanya type datanya selain number akan masuk ke valid+= 0 setelah itu kita retrun apabila inputnya salah
  
       ```
       if (nilai.length === 4 && valid === 4)
            {
            let nilaiAkhir = nilai.reduce((a, b) => a+b) / 4
                if(nilaiAkhir >100){
                  return `di atas rata rata`
                 }
                 else if(nilaiAkhir <= 100 && nilaiAkhir >= 90) {
                     return `Grade anda A dengan nilai akhir ${nilaiAkhir}`
                 } else if (nilaiAkhir < 90 && nilaiAkhir >= 80) {
                    return `Grade anda B dengan nilai akhir ${nilaiAkhir}`
                 } else if (nilaiAkhir < 80 && nilaiAkhir >= 70) {
                    return `Grade anda C dengan nilai akhir ${nilaiAkhir}`
                 } else if (nilaiAkhir < 70 && nilaiAkhir >= 60) {
                     return `Grade anda D dengan nilai akhir ${nilaiAkhir}`
                 } else if (nilaiAkhir < 60 && nilaiAkhir >= 0) {
                     return `Grade anda E dengan nilai akhir ${nilaiAkhir}`
                 }
              } else {
                 return 'harap isi nilai dengan benar'
             }   
         }
     ```
     * buat validasi panjang nilai === 4 && valid === 4
     * diperlukan reduce sebagai inisial dari nilai reduce yang akan ditampilkan. paratemer ini juga sebagai akumuliasi nilai-nilai setiap element array