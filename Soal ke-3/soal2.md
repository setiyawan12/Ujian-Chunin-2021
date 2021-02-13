# Urutan Angka
  #### Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5. Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.
  #### Metode Yang Di Guanakan
   * Array
   * pengkonidisian
   * sort
   * slice
 #### Implementasi
    ```
     let urutkan = (nilaiAwal,nilaiAkhir,arr)=>{
     
     }
    ```
  * membuat variable urutkan yang membawa 3 parameter
   ```
   let urutkan = (nilaiAwal,nilaiAkhir,arr)=>{
    if (nilaiAwal < nilaiAkhir && arr.length > 5) {
        return arr.sort((a,b)=>a-b).slice(nilaiAwal, nilaiAkhir)
    } else {
        return `error`
    }
   }
   console.log(urutkan(1,8,[7,2,1,4,5,6,3,8,9]));
  ```
 * jika nilaiAwal lebih keci dari nilai akhir dan array panjang lebih besar 5
 * mengembalikan nilai arr di sorting agar urut kemudian di slice untuk mengambil nilai awal dan nilai akhir
 * apabila panjang array kurang dari 5 bakal mengembalikan error