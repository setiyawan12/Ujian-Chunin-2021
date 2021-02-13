# Searching Nama
 #### Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut: const name = [‘Abigail’, ‘Alexandra’, ‘Alison’, ‘Amanda’, ‘Angela’, ’Bella’, ‘Carol’, ‘Caroline’, ‘Carolyn’, ‘Deirdre’, ‘Diana’, ‘Elizabeth’, ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]. Contoh: searchName(“an”, 3, callback)
 
 #### Metode Yang Di gunakan
   * Callback
   * map
   * filter
   * toLowerCase
   * includes
   * chartAt
   * substr
#### Implementasi
   * Syntax
     ```
       function cariNama(carinama, jumlah, callback) {
       const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella',
       'Faith','Olivia', 'Penelope'];
       callback(name, carinama, jumlah);
      }

   * Membuat function cariNama yang mempunya 3 parameter (carinama, jumlah, callback)
   * Didalam function cariNama buat variable name yang isinya Array
   * Membuat callback yang membuat value cariNama
     ```
     function cari(name,cariNama,jumlah){
    
      }
     ```
   * Membuat function cari yang mempunyai 3 parameter name,cariNama,jumlah
     ```
      function cari(name,cariNama,jumlah{
      const cari = name.map(n => n.toLowerCase())
      console.log(cari)
      }
      cariNama('',5,cari)
     ```
   * Memmbuat variable cari yang di dalamnya memanggil name dan membawa 1 method map untuk melakukan iterasi item array yang di dalamnya mempunyai parameter n yang di arrow function ke toLowercase jadi semua huruf yang ada di array name menjadi huruf kecil
      ```
       function cari (name,cariNama){
       const cari = name.map(n => n.toLowerCase()).filter(x => x.includes(cariNama.toLowerCase()))
       console.log(cari);
        }
       cariNama('an',8,cari)
       ```
   * Setelah itu kita filter fungsi filter membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi anonim yang dikirim sebagai parameter. fungsi ini sebenarnya menjalankan fungsi callback
      ```
       function cari (name,cariNama){
       const cari = name.map(n => n.toLowerCase()).filter(x => x.includes(cariNama.toLowerCase())).map(x => x.charAt(0).toUpperCase() + x.substr(1));
       console.log(cari);
        }
       cariNama('an',8,cari)
     ```
   * Setelah di filtter kita map yang di dalamnya mempunyai parameter x yang di dalamnya ada fungsi charAt(0) yang berfungsi untuk return frist character dan di ubah menjadi huruf Kapital dan di gabung dengan substr untuk hasil sisa
     ```
     function cari (name, cariNama,jumlah){
     const cari = name.map(n => n.toLowerCase()).filter(x => x.includes(cariNama.toLowerCase())).map(x => x.charAt(0).toUpperCase() + x.substr(1));
     const hasil = cari.slice(0,jumlah);
     console.log(hasil);
     }
     cariNama('an',5,cari)
  * setelah itu kita slice (0,jumlah) untuk menenukan seberapa data yang akan kita munculkan