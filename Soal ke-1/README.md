# Soal dasar mengenai pengetahuan dasar programming.
* Apakah yang dimaksud dengan Variabel dan Tipe Data didalam Javascript? Jelaskan jenis-jenis nya!
* Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana!
* Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana
* Apa yang kamu ketahui tentang synchronous dan asynchronous programming di Javascript?

## Tipe Data
- Tipe data adalah jenis-jenis data yang bisa kita simpan di dalam variabel
- tipe data yang umum kita ketahui di beberapa bahasa pemrograman, yaitu number, string, boolean, array, dll.
  * String
    - Setiap karakter yang dibungkus dengan kutip satu (‘) atau kutip dua (“) dianggap sebagai string oleh JavaScript. Kadang kita membutuhkan kombinasi diantara keduanya, contoh untuk kalimat yang mengandung karakter kutip,
      ```
      const nama = 'YayangSetiyawan';
      console.log(typeof nama) //? String
      ```
  * Number
    - Tipe data ‘number’ pada JavaScript merupakan salah satu tipe data yang unik, bahkan jika dibandingkan dari tipe data serupa pada bahasa pemrograman yang lain. Tidak ada integer, float, short, long seperti pada bahasa pemrograman lain. Hanya ada number.
      ```
      const age = 20;
      console.log(typeof age) //? Number
      ```
  * Boolean
    - Tipe data boolean merepresentasikan entitas logika. ‘boolean’ dapat merepresentasikan nilai benar atau salah, satu atau nol.
      ```
      const kondisi = true;
      console.log(typeof kondisi) //? Boolean
      ```
      
## IF ELSE AND SWICTH CASE
  * IF ELSE
    - Struktur IF adalah stuktur kode pemograman ‘conditional’ yang akan membuat percabangan di dalam program. Dengan menggunakan struktur IF, kita bisa membuat 2 percabangan program yang akan dieksekusi jika ‘kondisi’ terpenuhi, dan akan menjalankan kode program lain jika ‘kondisi’ tidak terpenuhi.
       ```
      if (conditional){
      //jika kondisi terpenuhi
      }else{
      //jika kondisi tidak terpenuhi
      }
       ```
   
 * SWICTH CASE
   - SWITCH digunakan untuk percabangan kode program dimana kondisi yang diperiksa hanya 1 namun membutuhkan banyak opsi.
      ```
     switch(kondisi){
     case hasil_kondisi_1:
       break;
     case hasil_kondisi_2:
       break;
     default:
         kode program untuk kondisi lainnya
        break;
      ```
   - Kondisi untuk inputan struktur SWITCH biasanya adalah variabel yang akan diperiksa. Hasil percabangan dari variabel tersebut akan ditangani oleh perintah case. Opsi default bisa ditambahkan untuk menangani kasus yang tidak ditangani oleh perintah case.
   
## Function dan Method
  * Function
    - Dalam pemrograman, fungsi sering digunakan untuk membungkus program menjadi bagian-bagian kecil. Logika program yang ada di dalam fungsi dapat kita gunakan kembali dengan memanggilnya. Sehingga tidak perlu menulis ulang.
       ```
        <!--  Cara ini paling sering digunakan, terutama buat yang baru belajar Javascript. --!>
         function namaFungsi(){
         console.log('Hello Word')
         }
      ```
  * Method
    - Method bisa di pahami sebagai tindakan atau pekerjaan
      ```
      var person = {
      firstName: "yayang",
      lastName : "setiyawan",
      fullName : function() {
      return this.firstName + " " + this.lastName;
      }
      };
    
      console.log(person.fullName());
      ```
  
  
## Syncronus dan Asynchronous
 * Syncronus
   - adalah proses jalannya program secara sequential , disini yang dimaksud sequential ada berdasarkan antrian ekseskusi program
 * Asynchronous
   - adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian