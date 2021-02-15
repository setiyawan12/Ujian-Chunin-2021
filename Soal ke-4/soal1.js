//Promise 1
let ditepati =true;
const janji = new Promise((resolve,reject)=>{
  if(ditepati){
    resolve('janji di tepati');
  }else{
      reject('janji tidak di tepati');
  }
});
janji
.then(result => console.log(`OK! : ${result}`))
.catch(result=>console.log(`NOT OK: ${result}`))  
//Promise 2
let ditepati1 =true;
const janji1 = new Promise((resolve,reject)=>{
  if(ditepati1){
    setTimeout(()=>{
      resolve('janji di tepati');
    },2000)
  }else{
    setTimeout(()=>{
      reject('janji tidak di tepati');
    },2000)
  }
});
janji1
.finally(()=>console.log('selesai '))
.then(result => console.log(`OK! : ${result}`))
.catch(result=>console.log(`NOT OK: ${result}`))

//Promise 3
const film = new Promise (resolve=>{
  setTimeout(()=>{
    resolve([{
      judul : 'PowerRangers',
      sutradara: 'plugin007',
      pameran:'Promise'
    }])
  },1000)
});
const cuaca = new Promise (resolve=>{
  setTimeout(()=>{
    resolve([{
      kota : 'Tegal',
      temp: 26,
      kondisi:'Badai Tornado'
    }])
  },1000)
});

Promise.all([film,cuaca])
  .then(response =>{
    const [film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
  })