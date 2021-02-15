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
}
getUnique("pluginsangatkerensekali")