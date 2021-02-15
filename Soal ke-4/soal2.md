# Fecth Api
 ### Buatlah program menggunakan method fetch untuk menampilkan semua title (hanya title nya saja) dari REST API dibawah ini https://dhiyo-api-article.herokuapp.com/articles Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya
 #### Implentasi
   ```
   const apiService = 'https://dhiyo-api-article.herokuapp.com/articles'
   fetch (apiService)
    .then(res => res.json())
    .then(res=>{
            res.data.map(user=>{
            console.log(`${user.tittle}:`);
        });
    });
   ```
   * buat variable yang bernama apiServices yang isinya link Api dari soal
   * diatas kita gunakan method fetch dimana method ini mengembalikan promise yang di resolve pada respone object.
   * karna method json mengembalikan promise
   * lalu kita gunakan lagi then(), lalu tulis lagi response, lalu kita panggil properti data dari response
   * karna masih berbentuk array of object maka kita perlu melakukan pengulang untuk mendapatkan data tittle
   * kita map, kita cari setiap element yang memiliki tittle