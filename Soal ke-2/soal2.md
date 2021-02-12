# spread operator dan destructuring
### klik gambar ini https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda . 2. Ambilah data “street dan city” tersebut menggunakan destructuring

#### metode yang di gunakan
 * spread operator
 * destructuring
    ```
    const data ={
    id : 1,
    name :"Leane Graham",
    username: "Bret",
    email : "Sincere@april.biz",
    address:{
        street:"Kulkas Light",
        suite:"Apt. 556",
        city:"Gwenb orough",
        zipcode:"92998-3874",
    },
    phone:"1-898989-9898",
    website : "hildegrad.org",
     }
 * pada gambar tersebut di beri suatu variable data yang di dalamnya berisi object
    ```
      const databaru = {...data, name:"yayangsetiyawan",email:"setiyawan@mail.com", hobi:"rebahan"};
      console.log(databaru);
    ```
 * buat variable data baru yang di dalamnya menggunakan spread operator memakai simbol tiga dot atau titik(...) dan menganti isi yang ada di object data yang di dalamnnya sebuah porperty data itu sendiri
    ```
     const {address} = data
     console.log({...address}.street); 
     console.log({...address}.city);
    ```
 * implementasi destructuring
 * pada javascript destructuring membuat kita dapat 'membongkar' nilai dari array atau poperti object kedalam variable yang terpisah
 * seperti halnya di atas kita bongkar data object di atas kita gunakan kurung siku {address} dan kita asignment dengan data