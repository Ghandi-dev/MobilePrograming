function balikKata(kata) {
    let kebalikan = '';
    for (let char of kata) {
        kebalikan = char + kebalikan;
    }
    return kebalikan;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("Informatika")) // akitamrofnI
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Humanikers")) // srekinamuH ma I