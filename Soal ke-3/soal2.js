let urutkan = (nilaiAwal,nilaiAkhir,arr)=>{
    if (nilaiAwal < nilaiAkhir && arr.length > 5) {
        return arr.sort((a,b)=>a-b).slice(nilaiAwal, nilaiAkhir)
    } else {
        return `error`
    }
}
console.log(urutkan(1,8,[7,2,1,4,5,6,3,8,9]));
