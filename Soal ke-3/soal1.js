function cariNama(carinama, jumlah, callback) {
    const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
    callback(name, carinama, jumlah);
}

function cari (name, cariNama,jumlah){
    const cari = name.map(n => n.toLowerCase()).filter(x => x.includes(cariNama.toLowerCase())).map(x => x.charAt(0).toUpperCase() + x.substr(1));
    const hasil = cari.slice(0,jumlah);
    console.log(hasil);
}
cariNama('an',5,cari)