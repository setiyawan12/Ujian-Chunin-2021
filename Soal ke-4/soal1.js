let ditepati =true;
const janji = new Promise((resolve,reject)=>{
  if(ditepati){
    resolve('janji di tepati');
  }else{
      reject('janji tidak di tepati');
  }
});
// console.log(janji);
janji
.then(result => console.log(`OK! : ${result}`))
.catch(result=>console.log(`NOT OK: ${result}`)) 