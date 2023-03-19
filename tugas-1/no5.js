var nama = 'Zack'
var peran = 'penyihir'

if (nama == '') {
    console.log("Nama harus diisi!!");
} else if (peran == '') {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (peran.toLocaleLowerCase == 'penyihir') {
    console.log(`Selamat datang di dunia werewolf, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat melihat siapa yang jadi werewolf`);
} else if (peran.toLocaleLowerCase == 'guard') {
    console.log(`Selamat datang di dunia werewolf, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf`);
} else if (peran.toLocaleLowerCase == 'werewolf') {
    console.log(`Selamat datang di dunia werewolf, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan memangsa setiap malam`);
}