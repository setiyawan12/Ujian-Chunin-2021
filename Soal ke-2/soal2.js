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

const databaru = {...data, name:"yayangsetiyawan",email:"setiyawan@mail.com", hobi:"rebahan"}
console.log(databaru);
const {address} = data
console.log({...address}.street);
console.log({...address}.city);