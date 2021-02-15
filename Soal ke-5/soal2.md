# Not Duplicate String
  ### Buatlah sebuah function yang dapat mengembalikan string baru yang telah diurutkan dari a - z akan tetapi tidak diperbolehkan ada huruf yang sama. Contoh : (pluginsangatkerensekali) menjadi (aegiklnprsu)
  #### Implementasi
  ```
    function getUnique(string){
    let uniqueArray = [];  
    // Loop through array values
    for(let s of string){
    for(i=0;i<s.length;i++){
       if(uniqueArray.indexOf(s[i]) === -1){
           uniqueArray.push(s[i]);
           }
         }
       }
       uniqueArray.sort()
       result = uniqueArray.join("")
       console.log(result);
         }membuat function yang menerima parameter string 
       getUnique("pluginsangatkerensekali")
  ```
* membuat function yang menerima parameter string 
* buat variable uniqueArray untuk menampung data array
* selanjutnya kita akan melakukan perulangan for ketika kondisi pada perulangan for terpenuhi maka akan melakukan pengkondisan
* jika index uniqeArray sama dengan -1 maka array pada string index ke i akan di push ke variabel array result
* jika perulangan sudah selesai maka kita akan mensorting ascending variabel array uniqeArray
* setelah itu array result akan di join sehingga akan mengembalikan lagi ke tipe data string