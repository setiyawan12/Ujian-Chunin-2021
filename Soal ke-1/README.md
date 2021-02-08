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