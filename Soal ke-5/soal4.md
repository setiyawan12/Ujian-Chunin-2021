# Reverse String
 ### Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik. Misalnya kalimat “Saya cinta PLUGIN”, output “PLUGIN cinta Saya” tanpa menggunakan built-in function / method bawaan dari javascript
 #### Implementation
  ```
  const reverseKata = (kata) => {
    let kataBaru = dataKata(kata);
    console.log(kataBaru);
    let tempString = '';
    let result = '';

    for (let i = 0; i < kataBaru.length; i++) {
        if (kataBaru[i] === ' ') {
            result += tempString + ' '
            tempString = '';
        } else {
            tempString = kataBaru[i] + tempString
        }
    }
    if (tempString.length !== 0) {
        result += tempString
    }
    return result
}

const dataKata = (result) => {
    let string = '';
    for (let i = result.length -1 ; i >= 0; i--) {
        string += result[i]
    }
    return string
}

console.log(reverseKata('Saya cinta PLUGIN'));
 ```
* buat fungsi untuk membalikan kalimat dengan nama dataKata yang mempunyai parameter kata
* menggunakan perulangan for 
* dengan i = panjang nilai result yang di masukan dari parameter dikuraingi 1
* lalu jika i lebih besar sama dengan 0, maka i akan dikurangi 1
* jika benar maka nilai akan dimasukan dan ditambah kedalam variabel string
* kita return value String
* kita buat fungsi kedua dengan nama variable reverseKata di fungsi ini akan memisah kata dan mngurutkan
* nilai dari return value string kita masukan dalam variabel kataBaru dengan callback function dari fungsi 1
* lalu kita buat 2 variabel kosong yaitu tempString dan result
* gunakan for loop untuk melakukan memisah spasi dan mengrutukan
*  i = 0 jika i < dari panjang value kataBaru, maka i akan ditambah 1
* akan masuk dalam validasi jika nilai index dari kataBaru === ' ' maka nilai tempString akan dimasukan ke dalam result dan nilai dari tempString akan di hapus
* nilai index kataBaru bukan spasi makan nilai akan di masukan nilai index tersebut dan akan digabung dengan nilai tempString
* for loop ini akan berlangsung sebanyak panjang dari value kataBaru
* jika nilai tempString ada maka nilai result akan di tambah dengan nilai tempString
* kita return nilai result

